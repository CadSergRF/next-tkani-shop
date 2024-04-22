import { Qa } from "@/components/Qa/Qa";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Вопрос - ответ | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function QaPage() {
	return <Qa />;
}
