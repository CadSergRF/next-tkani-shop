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
				.min(3, "Минимальное количество букв - 3")
				.max(100, "Максимальное количество букв - 100")
				.matches(REGEX_RUSSIAN_LETTERS, "Только русские буквы")
				.required("Необходимо внести ФИО"),
			phoneNumber: yup
				.string()
				.min(6, "Минимальное количество знаков - 6")
				.max(20, "Максимальное количество знаков - 20")
				.matches(REGEX_PHONE, "Не правильно введен номер")
				.required("Внесите номер телефона"),
			email: yup
				.string()
				.min(5, "Введите e-mail")
				.matches(REGEX_EMAIL, "Не правильно введен e-mail")
				.required("Внесите e-mail"),
		}),
		customerAddress: yup.object().shape({
			town: yup
				.string()
				.min(3, "Минимальное количество букв - 3")
				.max(33, "Максимальное количество букв - 33")
				.matches(REGEX_RUSSIAN_LETTERS, "Только русские буквы")
				.required("Необходимо заполнить поле"),
			streetHome: yup
				.string()
				.min(3, "Минимальное количество букв - 3")
				.max(100, "Максимальное количество букв - 100")
				.matches(REGEX_RUSSIAN_LETTERS_NUMBERS, "Только русские буквы и цифры")
				.required("Необходимо заполнить поле"),
			apartment: yup
				.string()
				.min(1, "Введите номер квартиры")
				.max(10, "Максимальное количество букв - 10")
				.matches(REGEX_RUSSIAN_LETTERS_NUMBERS, "Только русские буквы и цифры")
				.required("Необходимо заполнить поле"),
			floor: yup
				.string()
				.matches(REGEX_NUMBERS, `Только цифры или \u00AB-\u00BB`),
			entrance: yup
				.string()
				.matches(REGEX_NUMBERS, `Только цифры или \u00AB-\u00BB`),
			intercom: yup
				.string()
				.matches(REGEX_NUMBERS, `Только цифры или \u00AB-\u00BB`),
			postIndex: yup
				.string()
				.matches(REGEX_NUMBERS, `Только цифры или \u00AB-\u00BB`),
		}),
		deliveryType: yup.string().required("Выберите способ доставки"),
		privacyPolicy: yup
			.string()
			.required("Для оформления заказа необходимо ваше согласие"),
	})
	.required();
