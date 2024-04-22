import { AboutCompany } from "@/components/AboutCompany/AboutCompany";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "О компании | Твои-Ткани - интернет-магазин тканей",
	description: "Твои-Ткани - интернет-магазин тканей | Купить ткань",
};

export default function AboutCompanyPage() {
	return <AboutCompany />;
}
