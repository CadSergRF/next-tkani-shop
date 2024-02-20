"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Order } from "./Order/Order";
import { Delivery } from "./Delivery/Delivery";
import { PrivatePolicyCheck } from "./PrivatePolicyCheck/PrivatePolicyCheck";
import { Customer } from "./Customer/Customer";

import { TCartFormDelivery } from "@/Types/TCart";

import { useCartStore } from "@/lib/store/cart.store";
import { defaultOrderData } from "@/lib/constants/constants";
import { schemaOrderValidation } from "@/lib/constants/validation";

import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
	const cart = useCartStore((state) => state.cart);

	// state согласие с Правилами и disable кнопки submit
	const [acceptance, setAcceptance] = useState(false);

	const toggleAcceptance = () => {
		setAcceptance(!acceptance);
	};

	const methods = useForm<TCartFormDelivery>({
		mode: "onChange",
		defaultValues: defaultOrderData,
		resolver: yupResolver(schemaOrderValidation),
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
							{/* Согласие с политикой */}
							<PrivatePolicyCheck toggleAcceptance={toggleAcceptance} />
							{/* Кнопка submit формы */}
							<button
								className={styles.sc__button}
								disabled={!acceptance}
								// disabled={!acceptance && !methods.formState.isValid}
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
