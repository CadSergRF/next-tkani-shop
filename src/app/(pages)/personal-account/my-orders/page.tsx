import { Metadata } from "next";

import "./MyOrdersPage.css";
import { MyOrders } from "@/components/MyOrders/MyOrders";

export const metadata: Metadata = {
	title: "Мои заказы | Личный кабинет | Твои-Ткани - интернет-магазин тканей",
};

export default function MyOrdersPage() {
	return (
		<section className="my-orders">
			<h2 className="my-orders__title">Мои заказы</h2>
			<MyOrders />
		</section>
	);
}
