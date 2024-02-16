"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

// import { CartItem } from "./Order/CartItem/CartItem";
// import { OrderAmount } from "./Order/OrderAmount/OrderAmount";

// import { useCartStore } from "@/lib/store/cart.store";

import styles from "./ShoppingCart.module.css";

import {
	DeliveryMethod,
	TCartFormDelivery,
	TCartFormInput,
} from "@/Types/TCart";
import { Order } from "./Order/Order";
import { Delivery } from "./Delivery/Delivery";
import { PrivatePolicyCheck } from "./PrivatePolicyCheck/PrivatePolicyCheck";

const ShoppingCart = () => {
	// const cartItems = useCartStore((state) => state.cart);

	const methods = useForm<TCartFormDelivery>();
	// const onSubmit: SubmitHandler<TCartFormInput> = (data) => console.log(data);
	const onSubmit: SubmitHandler<TCartFormDelivery> = (data) =>
		console.log(data);

	return (
		<>
			<h2 className={styles.sc_title}>Корзина</h2>
			<div className={styles.sc_container}>
				{/* Список выбранных товаров */}
				<Order />

				<span className={styles.sc__empty_block} />

				{/* Варианты доставки */}
				<section>
					<h2 className={styles.sc_title}>Способ доставки</h2>
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<Delivery />
							<PrivatePolicyCheck />
						</form>
					</FormProvider>
				</section>
			</div>
		</>
	);
};

export default ShoppingCart;
