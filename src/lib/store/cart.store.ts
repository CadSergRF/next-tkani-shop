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
							findProduct.orderQuantity += productToCart.orderQuantity;
						} else {
							newCart.push(productToCart);
						}

						return { cart: newCart };
					}),
				showCart: false,
			}),
			{ name: "cartStore" },
		),
	),
);
