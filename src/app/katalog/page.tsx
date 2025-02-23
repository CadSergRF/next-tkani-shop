import { Metadata } from "next";

import { card_product } from "@/lib/FakeData/FakeProduct/newProductFake";

import { ProductCard } from "@/components/ProductCard/ProductCard";

export const metadata: Metadata = {
	title: "Каталог товаров | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function Katalog() {
	return <ProductCard card={card_product} />;
}
