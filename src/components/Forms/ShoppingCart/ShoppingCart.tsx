"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TCartFormDelivery, TChosenDeliveryMethod } from "@/Types/TCart";
import { TPersonalDeliveryAddress } from "@/Types/TClient";

import {
	defaultFakeDeliveryAddress,
	defaultOrderData,
} from "@/lib/constants/Cart.constants";
import { schemaOrderValidation } from "@/lib/constants/orderValidation.constants";

import { renderAddress } from "@/helpers/renderAddress.helper";
import { redirectMain } from "@/helpers/redirect.helper";
import { postOrderDispatch } from "@/utils/fetch/order.fetch";

import { useCartStore } from "@/lib/store/cart.store";

import { Customer } from "./Customer/Customer";
import { Delivery } from "./Delivery/Delivery";
import { Address } from "./Address/Address";
import { PrivatePolicyCheck } from "./PrivatePolicyCheck/PrivatePolicyCheck";
import { Order } from "./Order/Order";

import styles from "./ShoppingCart.module.css";
import Link from "next/link";

const ShoppingCart = () => {
	// State для уведомления об отправке заказа
	const [orderDispatch, setOrderDispatch] = useState(false);
	// State для уведомления об ошибке заказа
	const [orderErrorDispatch, setOrderErrorDispatch] = useState(false);
	// state согласие с Правилами и disable кнопки submit
	const [acceptance, setAcceptance] = useState(false);

	// Корзина товаров
	const { cart, clearState } = useCartStore((state) => state);

	// Создаем форму заказа
	const methods = useForm<TCartFormDelivery>({
		mode: "onChange",
		defaultValues: defaultOrderData,
		resolver: yupResolver(schemaOrderValidation),
	});

	// Отслеживаем компонент Delivery
	const formValueDelivery = methods.watch("deliveryType", "");
	// Возвращаем объект для рендеринга Address
	const addressDelivery: TChosenDeliveryMethod =
		renderAddress(formValueDelivery);
	// Формируем массив ключей нужного адреса
	let addressDeliveryArray: string[] = addressDelivery.address.map(
		(item) => item.name.split(".")[1],
	);

	// При изменении выбора метода доставки
	useEffect(() => {
		// Сбрасываем до default оставляя Данные заказчика и выбранный метод
		methods.reset(undefined, { keepDirtyValues: true });
		// Перезаполняем default адреса
		for (let key in defaultOrderData.customerAddress) {
			if (!addressDeliveryArray.includes(key as string)) {
				methods.setValue(
					`customerAddress.${key}` as any,
					defaultFakeDeliveryAddress[key as keyof TPersonalDeliveryAddress],
				);
			}
		}
	}, [formValueDelivery]);

	// Галочка "Правила"
	const toggleAcceptance = () => {
		setAcceptance(!acceptance);
	};

	const onSubmit: SubmitHandler<TCartFormDelivery> = async (data) => {
		for (let key in data.customerAddress) {
			if (!addressDeliveryArray.includes(key as string)) {
				delete data.customerAddress[key as keyof TPersonalDeliveryAddress];
			}
		}
		// Тело запроса
		const output = {
			...data,
			cart: cart,
		};
		try {
			const resp = await postOrderDispatch("/order/dispatch", output);
			if (resp) {
				setOrderDispatch(true);
				// очищаем форму до default
				methods.reset();
				// очищаем state до default
				clearState();
				// Время для показа уведомления и редирект на каталог
				setTimeout(() => {
					redirectMain();
				}, 3000);
			} else {
				throw new Error("Ошибка создания заказа");
			}
		} catch (error) {
			setOrderErrorDispatch(true);
			setTimeout(() => {
				setOrderErrorDispatch(false);
			}, 3000);
		}
	};

	if (orderDispatch)
		return (
			<>
				<h2 className={styles.sc__orderDispatch}>Ваш заказ принят</h2>
				<h2 className={styles.sc__orderDispatch}>и отправлен на проверку</h2>
			</>
		);

	if (orderErrorDispatch)
		return <h2 className={styles.sc__orderDispatch}>Ошибка отправки заказа</h2>;

	// ---------  TO RENDER ---------

	if (cart?.length === 0)
		return (
			<div className={styles.emptyCart}>
				<h2 className={styles.emptyCart_title}>Ваша корзина пуста</h2>
				<p className={styles.emptyCart_text}>
					Воспользуйтесь поиском, чтобы найти всё, что нужно
				</p>
				<Link
					href="/katalog"
					className={styles.sc__emptyCart_Link}
				>
					Начать покупки
				</Link>
			</div>
		);

	return (
		<>
			<h2 className={styles.sc_title}>Корзина</h2>
			<div className={styles.sc_container}>
				{/* Список выбранных товаров */}
				<Order />
				{/* Форма */}
				<section>
					<FormProvider {...methods}>
						<form
							className={styles.sc__form}
							onSubmit={methods.handleSubmit(onSubmit)}
						>
							{/* Данные заказчика */}
							<Customer />
							{/* Вариант доставки */}
							<Delivery />
							{/* Адрес доставки */}
							<Address addressDelivery={addressDelivery?.address} />
							{/* Согласие с политикой */}
							<PrivatePolicyCheck toggleAcceptance={toggleAcceptance} />
							{/* Кнопка submit формы */}
							<button
								className={styles.sc__button}
								disabled={
									!acceptance && !methods.formState.isValid && cart?.length > 0
								}
							>
								Заказать
							</button>
						</form>
					</FormProvider>
				</section>
			</div>
		</>
	);
};

export default ShoppingCart;
