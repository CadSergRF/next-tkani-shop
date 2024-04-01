import { checkLogin } from "@/utils/fetch.utils";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Авторизация | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default async function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const loggedIn = await checkLogin();
	if (!loggedIn) {
		return <>{children}</>;
	}
	return redirect("/");
}
