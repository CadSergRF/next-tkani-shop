"use client";

import { useCartStore } from "@/lib/store/cart.store";

const ShoppingCart = () => {
	const cartItems = useCartStore((state) => state.cart);

	return (
		<div>
			<p> товары ,/</p>
			{cartItems && cartItems.map((item) => <div>{item.orderQuantity}</div>)}
		</div>
	);
};

export default ShoppingCart;
