import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Страница не найдена | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function NotFound() {
	return (
		<div>
			<h2>Страница не найдена</h2>
		</div>
	);
}
