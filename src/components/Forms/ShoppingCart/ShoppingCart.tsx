"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { Order } from "./Order/Order";
import { Delivery } from "./Delivery/Delivery";
import { PrivatePolicyCheck } from "./PrivatePolicyCheck/PrivatePolicyCheck";

import { TCartFormDelivery } from "@/Types/TCart";

import styles from "./ShoppingCart.module.css";
import { useCartStore } from "@/lib/store/cart.store";
import { Customer } from "./Customer/Customer";

const ShoppingCart = () => {
	const cart = useCartStore((state) => state.cart);

	// state согласие с Правилами и disable кнопки submit
	const [acceptance, setAcceptance] = useState(false);

	const toggleAcceptance = () => {
		setAcceptance(!acceptance);
	};

	const methods = useForm<TCartFormDelivery>();
	const {
		formState: { errors },
	} = methods;

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
							<span className={styles.sc__empty_block} />
							<h2 className={styles.sc_title}>Способ доставки</h2>
							<Delivery />
							<PrivatePolicyCheck toggleAcceptance={toggleAcceptance} />
							{errors && <p>Заполните все обязательные поля</p>}
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
