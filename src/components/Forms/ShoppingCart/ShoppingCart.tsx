"use client";

import { useCartStore } from "@/lib/store/cart.store";
import { CartItem } from "./CartItem/CartItem";

import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
	const cartItems = useCartStore((state) => state.cart);

	return (
		<form className={styles.sc_container}>
			<ul>
				{cartItems ? (
					cartItems.map((item) => (
						// <p>{item.cartProduct.image}</p>
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
		</form>
	);
};

export default ShoppingCart;
