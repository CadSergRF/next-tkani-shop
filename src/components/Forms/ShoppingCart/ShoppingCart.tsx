"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Order } from "./Order/Order";
import { Delivery } from "./Delivery/Delivery";
import { PrivatePolicyCheck } from "./PrivatePolicyCheck/PrivatePolicyCheck";

import { TCartFormDelivery } from "@/Types/TCart";

import styles from "./ShoppingCart.module.css";
import { useCartStore } from "@/lib/store/cart.store";
import { Customer } from "./Customer/Customer";
import { REGEX_PHONE, defaultOrderData } from "@/lib/constants/constants";

const schema = yup
	.object()
	.shape({
		cart: yup.object(),
		customerData: yup.object().shape({
			name: yup.string().required("Необходимо внести ФИО"),
			phoneNumber: yup
				.string()
				.matches(REGEX_PHONE, "Не правильно введен номер")
				.required("Внесите номер телефона"),
			email: yup.string().required("Внесите e-mail"),
		}),
		customerAddress: yup.object().shape({
			town: yup.string().required("Необходимо заполнить поле"),
			streetHome: yup.string().required("Необходимо заполнить поле"),
			apartment: yup.string().required("Необходимо заполнить поле"),
			floor: yup.string(),
			entrance: yup.string(),
			intercom: yup.string(),
			postIndex: yup.number(),
		}),
		deliveryType: yup.string().required("Выберите способ доставки"),
		privacyPolicy: yup
			.string()
			.required("Для оформления заказа необходимо ваше согласие"),
	})
	.required();

const ShoppingCart = () => {
	const cart = useCartStore((state) => state.cart);

	// state согласие с Правилами и disable кнопки submit
	const [acceptance, setAcceptance] = useState(false);

	const toggleAcceptance = () => {
		setAcceptance(!acceptance);
	};

	const methods = useForm<TCartFormDelivery>({
		mode: "onBlur",
		defaultValues: defaultOrderData,
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<TCartFormDelivery> = (data) => {
		const output = {
			...data,
			cart: cart,
		};
		console.log(output);
	};

	return (
		<>
			<h2 className={styles.sc_title}>Корзина</h2>
			<div className={styles.sc_container}>
				{/* Список выбранных товаров */}
				<Order />

				{/* Варианты доставки */}
				<section>
					<FormProvider {...methods}>
						<form
							className={styles.sc__form}
							onSubmit={methods.handleSubmit(onSubmit)}
						>
							<Customer />
							<h2 className={styles.sc_title}>Способ доставки</h2>
							<Delivery />
							<PrivatePolicyCheck toggleAcceptance={toggleAcceptance} />

							<button className={styles.sc__button} disabled={!acceptance}>
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
