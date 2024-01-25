import { TPersonalData } from "@/Types/TClient";

import { BlockLikeForm } from "../ui-kit/BlockLikeForm/BlockLikeForm";

import "./PersonalData.css";
import clsx from "clsx";
import { ChangeDataBtn } from "../ui-kit/ChangeDataBtn/ChangeDataBtn";

type Props = {
	personalData: TPersonalData;
	consentNewsletter: boolean;
};

const PersonalData = ({ personalData, consentNewsletter }: Props) => {
	const { fullName, phoneNumber, birthday = "", eMail } = personalData;

	return (
		<>
			<article className="personal-data_data">
				<BlockLikeForm title="ФИО*" text={fullName} />
				<BlockLikeForm title="Номер телефона*" text={phoneNumber} />
				<BlockLikeForm title="Дата рождения" text={birthday} />
				<BlockLikeForm title="E-mail" text={eMail} />
				<p
					className={clsx("personal-data__consentNewsletter", {
						data__consentNewsletter_checked: consentNewsletter,
						data__consentNewsletter_unchecked: !consentNewsletter,
					})}
				>
					Я согласен на получение e-mail - рассылки от Твои ткани
				</p>
			</article>
			<div className="personal-data__btn-block">
				<ChangeDataBtn text="Изменить пароль" />
				<ChangeDataBtn text="Изменить личные данные" />
			</div>
		</>
	);
};

export { PersonalData };
