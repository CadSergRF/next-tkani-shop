"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Order } from "./Order/Order";
import { Delivery } from "./Delivery/Delivery";
import { PrivatePolicyCheck } from "./PrivatePolicyCheck/PrivatePolicyCheck";
import { Customer } from "./Customer/Customer";

import { TCartFormDelivery, TChosenDeliveryMethod } from "@/Types/TCart";

import { useCartStore } from "@/lib/store/cart.store";
import {
	defaultFakeDeliveryAddress,
	defaultOrderData,
} from "@/lib/constants/Cart.constants";
import { schemaOrderValidation } from "@/lib/constants/orderValidation.constants";

import styles from "./ShoppingCart.module.css";
import { renderAddress } from "@/helpers/renderAddress.helper";
import { Address } from "./Address/Address";
import { TPersonalDeliveryAddress } from "@/Types/TClient";
import { redirect } from "next/navigation";

const ShoppingCart = () => {
	// State для уведомления об отправке заказа
	const [orderDispatch, setOrderDispatch] = useState(false);
	// Корзина товаров
	const cart = useCartStore((state) => state.cart);
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

	useEffect(() => {
		// При изменении выбора метода доставки
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

	// state согласие с Правилами и disable кнопки submit
	const [acceptance, setAcceptance] = useState(false);

	const toggleAcceptance = () => {
		setAcceptance(!acceptance);
	};

	const onSubmit: SubmitHandler<TCartFormDelivery> = (data) => {
		setOrderDispatch(true);
		for (let key in data.customerAddress) {
			if (!addressDeliveryArray.includes(key as string)) {
				delete data.customerAddress[key as keyof TPersonalDeliveryAddress];
			}
		}
		const output = {
			...data,
			cart: cart,
		};
		console.log("данные формы ", output);
		setTimeout(() => {
			setOrderDispatch(false);
			redirect("/katalog");
		}, 5000);
	};

	if (orderDispatch) return <h2>Заказ отправлен на проверку</h2>;

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
								disabled={!acceptance && !methods.formState.isValid}
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
