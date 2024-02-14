"use client";

import { useCartStore } from "@/lib/store/cart.store";
import { CartItem } from "./CartItem/CartItem";

import styles from "./ShoppingCart.module.css";
import { OrderAmount } from "./OrderAmount/OrderAmount";

const ShoppingCart = () => {
	const cartItems = useCartStore((state) => state.cart);

	console.log("ShoppingCart" + cartItems);

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
						cartItems.map((item, index) => (
							<CartItem
								key={item.cartProduct.id}
								product={item.cartProduct}
								index={index}
								// quantity={item.orderQuantity}
							/>
						))
					) : (
						<p>Корзина пустая</p>
					)}
				</ul>
				<OrderAmount />
			</form>
		</>
	);
};

export default ShoppingCart;
