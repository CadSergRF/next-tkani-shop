import clsx from "clsx";

import { TPersonalData } from "@/Types/TClient";

import { BlockLikeForm } from "../ui-kit/BlockLikeForm/BlockLikeForm";
import { ChangeDataBtn } from "../ui-kit/ChangeDataBtn/ChangeDataBtn";

import styles from "./PersonalData.module.css";

type Props = {
	personalData: TPersonalData;
	consentNewsletter: boolean;
};

const PersonalData = ({ personalData, consentNewsletter }: Props) => {
	const { fullName, phoneNumber, birthday = "", eMail } = personalData;

	return (
		<>
			<article className={styles.personal_data_data}>
				<BlockLikeForm title="ФИО*" text={fullName} />
				<BlockLikeForm title="Номер телефона*" text={phoneNumber} />
				<BlockLikeForm title="Дата рождения" text={birthday} />
				<BlockLikeForm title="E-mail" text={eMail} />
				<p
					className={clsx(styles.personal_data__consentNewsletter, {
						[styles.data__consentNewsletter_checked]: consentNewsletter,
						[styles.data__consentNewsletter_unchecked]: !consentNewsletter,
					})}
				>
					Я согласен на получение e-mail - рассылки от Твои ткани
				</p>
			</article>
			<div>
				<ChangeDataBtn text="Изменить пароль" color="gray" />
				<ChangeDataBtn text="Изменить личные данные" color="gray" />
			</div>
		</>
	);
};

export { PersonalData };
