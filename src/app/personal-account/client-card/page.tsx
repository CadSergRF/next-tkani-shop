import { Metadata } from "next";

import "./ClientCardPage.css";
import { ClientCard } from "@/components/ClientCard/ClientCard";
import { fakeUser } from "@/lib/FakeData/FakeUser";

export const metadata: Metadata = {
	title:
		"Карта покупателя | Личный кабинет | Твои-Ткани - интернет-магазин тканей",
};

export default function ClientCardPage() {
	return (
		<section className="client-card">
			<h2 className="client-card__title">Карта покупателя</h2>
			{fakeUser?.clientCard ? (
				<ClientCard clientCard={fakeUser.clientCard} />
			) : (
				<p>Карта покупателя отсутствует</p>
			)}
			<p className="client-card__info">Скидка по карте: </p>
			<p className="client-card__info-value">5%</p>
		</section>
	);
}
