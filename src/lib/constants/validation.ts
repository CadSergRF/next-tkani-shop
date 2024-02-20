import * as yup from "yup";
import {
	REGEX_EMAIL,
	REGEX_NUMBERS,
	REGEX_PHONE,
	REGEX_RUSSIAN_LETTERS,
	REGEX_RUSSIAN_LETTERS_NUMBERS,
} from "./constants";

export const schemaOrderValidation = yup
	.object()
	.shape({
		// cart: yup.object(),
		customerData: yup.object().shape({
			name: yup
				.string()
				.matches(REGEX_RUSSIAN_LETTERS, "Только русские буквы")
				.required("Необходимо внести ФИО"),
			phoneNumber: yup
				.string()
				.matches(REGEX_PHONE, "Не правильно введен номер")
				.required("Внесите номер телефона"),
			email: yup
				.string()
				.matches(REGEX_EMAIL, "Не правильно введен e-mail")
				.required("Внесите e-mail"),
		}),
		customerAddress: yup.object().shape({
			town: yup
				.string()
				.matches(REGEX_RUSSIAN_LETTERS, "Только русские буквы")
				.required("Необходимо заполнить поле"),
			streetHome: yup
				.string()
				.matches(REGEX_RUSSIAN_LETTERS_NUMBERS, "Только русские буквы и цифры")
				.required("Необходимо заполнить поле"),
			apartment: yup
				.string()
				.matches(REGEX_RUSSIAN_LETTERS_NUMBERS, "Только русские буквы и цифры")
				.required("Необходимо заполнить поле"),
			floor: yup.string().matches(REGEX_NUMBERS, "Только цифры"),
			entrance: yup.string().matches(REGEX_NUMBERS, "Только цифры"),
			intercom: yup.string().matches(REGEX_NUMBERS, "Только цифры"),
			postIndex: yup.string().matches(REGEX_NUMBERS, "Только цифры"),
		}),
		deliveryType: yup.string().required("Выберите способ доставки"),
		privacyPolicy: yup
			.string()
			.required("Для оформления заказа необходимо ваше согласие"),
	})
	.required();
