"use client";

import { useCartStore } from "@/lib/store/cart.store";
import { CartItem } from "./CartItem/CartItem";

import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
	const cartItems = useCartStore((state) => state.cart);

	const orderReduce = cartItems.reduce(
		(acc, item) => acc + item.cartProduct.price * item.orderQuantity,
		0,
	);

	console.log(cartItems);

	const orderAmount = Math.round((orderReduce + Number.EPSILON) * 100) / 100;
	const orderAmountRub = Math.trunc(orderAmount);
	// Дробная часть
	const orderAmountKop = (orderAmount - orderAmountRub) * 100;
	const orderAmountKopToScreen =
		orderAmountKop === 0 ? "00" : orderAmountKop.toFixed(0);

	return (
		<>
			<h2 className={styles.cs_title}>Корзина</h2>
			<form className={styles.sc_container}>
				<ul className={styles.sc__product_list}>
					<li className={styles.cs__product_list__title}>
						<p></p>
						<p>Товар</p>
						<p>Количество</p>
						<p>Цена</p>
						<p className={styles.cs__product_list__title_item}>Сумма</p>
						<p></p>
					</li>
					{cartItems ? (
						cartItems.map((item) => (
							<CartItem
								key={item.cartProduct.id}
								product={item.cartProduct}
								quantity={item.orderQuantity}
							/>
						))
					) : (
						<p>Корзина пустая</p>
					)}
				</ul>
				<div className={styles.cs__product_list__order_amount}>
					<span className={styles.cs__product_list__order_amount__title}>
						Сумма заказа:{" "}
					</span>
					<span className={styles.cs__product_list__order_amount__price}>
						{orderAmountRub.toFixed(0)}
					</span>
					<span className={styles.cs__product_list__order_amount__text}>
						руб.{" "}
					</span>
					<span className={styles.cs__product_list__order_amount__price}>
						{orderAmountKopToScreen}
					</span>
					<span className={styles.cs__product_list__order_amount__text}>
						коп.
					</span>
				</div>
			</form>
		</>
	);
};

export default ShoppingCart;
