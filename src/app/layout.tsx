import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import clsx from "clsx";

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	subsets: ["cyrillic"],
	display: "swap",
});

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
			<body className={clsx(montserrat.className, "body_container")}>
				<Header />
				<main className="main_container">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
