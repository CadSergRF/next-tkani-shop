import type { Metadata } from "next";
import clsx from "clsx";

import { montserrat } from "@/lib/fonts/font";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import "./globals.css";

export const metadata: Metadata = {
	title: "Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={clsx(montserrat.variable, "body_container")}>
				<Header />
				<main className="main_container">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
