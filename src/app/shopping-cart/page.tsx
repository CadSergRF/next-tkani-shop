import { Metadata } from "next";

import ShoppingCart from "@/components/Forms/ShoppingCart/ShoppingCart";

export const metadata: Metadata = {
	title: "Корзина покупок | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function Cart() {
	return (
		<>
			<ShoppingCart />
		</>
	);
}
