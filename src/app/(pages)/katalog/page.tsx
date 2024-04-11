import { Metadata } from "next";

import { Catalog } from "@/components/Catalog/Catalog";

export const metadata: Metadata = {
	title: "Каталог товаров | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function Katalog() {
	return <Catalog />;
}
