"use client";

import { useCartStore } from "@/lib/store/cart.store";

import { CartItem } from "./CartItem/CartItem";
import { OrderAmount } from "./OrderAmount/OrderAmount";

import styles from "./Order.module.css";

const Order = () => {
	const cartItems = useCartStore((state) => state.cart);

	return (
		<section>
			<ul className={styles.order}>
				<li className={styles.order__title}>
					<p></p>
					<p>Наименование</p>
					<p>Количество</p>
					<p>Цена</p>
					<p className={styles.order__title_item}>Сумма</p>
					<p></p>
				</li>
				{cartItems ? (
					cartItems.map((item, index) => (
						<CartItem
							key={item.cartProduct._id}
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
	);
};

export { Order };
