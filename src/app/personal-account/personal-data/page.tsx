import { Metadata } from "next";

import { BlockLikeForm } from "@/components/ui-kit/BlockLikeForm/BlockLikeForm";

import "./personalData.css";

export const metadata: Metadata = {
	title:
		"Личные данные | Личный кабинет | Твои-Ткани - интернет-магазин тканей",
};

export default function PersonalData() {
	return (
		<section className="personal-data">
			<h2 className="personal-data__title">Личные данные</h2>
			<article className="personal-data_data">
				<BlockLikeForm title="ФИО*" text="Никитина Евгения Юрьевна" />
				<BlockLikeForm title="Номер телефона*" text="+7 999 999 9999" />
				<BlockLikeForm title="Дата рождения" text="31 декабря 3112" />
				<BlockLikeForm title="E-mail" text="some@e-mail.com" />
				<form className="personal-data__consentNewsletter">
					<input
						id="consentNewsletter"
						className="personal-data__consentNewsletter_box"
						type="checkbox"
						defaultChecked={true}
					/>
					<label
						htmlFor="consentNewsletter"
						className="personal-data__consentNewsletter_label"
					>
						Я согласен на получение e-mail - рассылки от Твои ткани
					</label>
				</form>
			</article>
		</section>
	);
}
