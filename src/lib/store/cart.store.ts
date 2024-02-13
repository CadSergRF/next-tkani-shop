import { create } from "zustand";

import { TCardFull, TCardMainInfo } from "@/Types/TCard";
import { devtools, persist } from "zustand/middleware";

type TOrderProduct = {
	cartProduct: TCardMainInfo;
	orderQuantity: number;
};

type cartState = {
	cart: TOrderProduct[];
	addToCart: (productToCart: TOrderProduct) => void;
	removeFromCart: (productID: string) => void;
	updateQuantity: (productID: string, action: "increase" | "decrease") => void;
	showCart: boolean;
};

export const useCartStore = create<cartState>()(
	devtools(
		persist(
			(set, get) => ({
				cart: [],
				addToCart: (productToCart: TOrderProduct) =>
					set(() => {
						const newCart = get().cart;
						const findProduct = newCart.find(
							(p) => p.cartProduct.id === productToCart.cartProduct.id,
						);
						if (findProduct) {
							const newQuantity =
								findProduct.orderQuantity + productToCart.orderQuantity;
							findProduct.orderQuantity =
								Math.round((newQuantity + Number.EPSILON) * 100) / 100;
						} else {
							newCart.push(productToCart);
						}

						return { cart: newCart };
					}),
				removeFromCart: (productID: string) =>
					set(() => {
						const newCart = get().cart;
						const filteredCart = newCart.filter(
							(item) => item.cartProduct.id !== productID,
						);

						return { cart: filteredCart };
					}),
				updateQuantity: (productID: string, action: "increase" | "decrease") =>
					set(() => {
						const newCart = get().cart;
						const findProduct = newCart.find(
							(item) => item.cartProduct.id === productID,
						);
						console.log("найденный" + findProduct?.orderQuantity);
						if (findProduct) {
							if (action === "decrease") {
								findProduct.orderQuantity =
									findProduct.orderQuantity! > 0.1
										? findProduct.orderQuantity! - 0.1
										: findProduct.orderQuantity!;
							} else {
								findProduct.orderQuantity! += 0.1;
							}
						}
						console.log("измененный" + findProduct?.orderQuantity);

						return { cart: newCart };
					}),
				showCart: false,
			}),
			{ name: "cartStore" },
		),
	),
);
