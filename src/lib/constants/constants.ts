export const REGEX_QUANTITY = /^[0-9]*\.?[0-9]*$/;
export const REGEX_PHONE =
	/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
export const REGEX_RUSSIAN_LETTERS = /^[а-яА-ЯёЁ\s-]+$/;
export const REGEX_NUMBERS = /^[0-9]+$/;
export const REGEX_RUSSIAN_LETTERS_NUMBERS = /^[а-яА-ЯёЁ0-9\s-]+$/;
export const REGEX_EMAIL =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const defaultOrderData = {
	cart: [],
	customerData: {
		name: "",
		email: "",
	},
	customerAddress: {
		town: "",
		streetHome: "",
		entrance: "",
		floor: "",
		apartment: "",
		intercom: "",
		postIndex: "",
	},
	deliveryType: "",
	privacyPolicy: "",
};
