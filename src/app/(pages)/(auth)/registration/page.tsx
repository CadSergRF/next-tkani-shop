import { Registration } from "@/components/Forms/Registration/Registration";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Регистрация | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function RegistrationPage() {
	return <Registration />;
}
