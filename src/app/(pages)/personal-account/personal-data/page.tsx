import { Metadata } from "next";

import { PersonalData } from "@/components/PersonalData/PersonalData";

import { fakeUser } from "@/lib/FakeData/FakeUser";

import "./personalData.css";

export const metadata: Metadata = {
	title:
		"Личные данные | Личный кабинет | Твои-Ткани - интернет-магазин тканей",
};

export default function PersonalDataPage() {
	return (
		<section className="personal-data">
			<h2 className="personal-data__title">Личные данные</h2>
			<PersonalData personalData={fakeUser} consentNewsletter={true} />
		</section>
	);
}
