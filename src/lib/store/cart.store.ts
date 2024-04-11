import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import { roundedNum } from "@/helpers/func.helpers";
import { TOrderProduct } from "@/Types/TCart";

type cartState = {
	cart: TOrderProduct[];
	addToCart: (productToCart: TOrderProduct) => void;
	removeFromCart: (productID: string) => void;
	updateQuantity: (productID: string, action: "increase" | "decrease") => void;
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
							(p) => p.cartProduct._id === productToCart.cartProduct._id,
						);
						if (findProduct) {
							const newQuantity =
								findProduct.orderQuantity + productToCart.orderQuantity;
							findProduct.orderQuantity = roundedNum(newQuantity, 2);
						} else {
							newCart.push(productToCart);
						}

						return { cart: newCart };
					}),
				removeFromCart: (productID: string) =>
					set(() => {
						const newCart = get().cart;
						const filteredCart = newCart.filter(
							(item) => item.cartProduct._id !== productID,
						);

						return { cart: filteredCart };
					}),
				updateQuantity: (productID: string, action: "increase" | "decrease") =>
					set(() => {
						const newCart = get().cart;
						const findProduct = newCart.find(
							(item) => item.cartProduct._id === productID,
						);

						if (findProduct) {
							let quantityVariable = findProduct.orderQuantity;
							if (action === "decrease") {
								quantityVariable > 0.1
									? (quantityVariable -= 0.1)
									: (quantityVariable = 0);
							} else {
								quantityVariable += 0.1;
							}
							findProduct.orderQuantity = roundedNum(quantityVariable, 2);
						}

						return { cart: newCart };
					}),
			}),
			{ name: "cartStore" },
		),
	),
);
