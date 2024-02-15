"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { CartItem } from "./CartItem/CartItem";
import { OrderAmount } from "./OrderAmount/OrderAmount";

import { useCartStore } from "@/lib/store/cart.store";

import styles from "./ShoppingCart.module.css";
import {
	DeliveryMethod,
	TCartFormDelivery,
	TCartFormInput,
} from "@/Types/TCart";

const ShoppingCart = () => {
	const cartItems = useCartStore((state) => state.cart);

	const { register, handleSubmit } = useForm<TCartFormDelivery>();
	const onSubmit: SubmitHandler<TCartFormInput> = (data) => console.log(data);

	return (
		<>
			<h2 className={styles.sc_title}>Корзина</h2>
			<div className={styles.sc_container}>
				{/* Список выбранных товаров */}
				<section>
					<ul className={styles.sc__product_list}>
						<li className={styles.sc__product_list__title}>
							<p></p>
							<p>Наименование</p>
							<p>Количество</p>
							<p>Цена</p>
							<p className={styles.sc__product_list__title_item}>Сумма</p>
							<p></p>
						</li>
						{cartItems ? (
							cartItems.map((item, index) => (
								<CartItem
									key={item.cartProduct.id}
									product={item.cartProduct}
									index={index}
								/>
							))
						) : (
							<p>Корзина пустая</p>
						)}
					</ul>
					<OrderAmount />
				</section>

				<span className={styles.sc__empty_block} />

				{/* Варианты доставки */}
				<section className={styles.sc__delivery}>
					<h2 className={styles.sc_title}>Способ доставки</h2>
					{DeliveryMethod ? (
						DeliveryMethod.map((item, index) => (
							<label
								key={item + index}
								className={styles.sc__delivery__item_label}
							>
								<input
									{...register("deliveryType", { required: true })}
									type="radio"
									value={item}
									className={styles.sc__delivery__item_input}
								/>
								<span className={styles.sc__delivery__item_span}>{item}</span>
							</label>
						))
					) : (
						<p>Варианты доставки отсутствуют</p>
					)}
				</section>
			</div>
		</>
	);
};

export default ShoppingCart;
