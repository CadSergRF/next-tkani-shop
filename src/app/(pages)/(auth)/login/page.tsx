import { Login } from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Авторизация | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function LoginPage() {
	return <Login />;
}
