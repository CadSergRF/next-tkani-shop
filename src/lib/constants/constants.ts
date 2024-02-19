export const REGEX_QUANTITY = /^[0-9]*\.?[0-9]*$/;
export const REGEX_PHONE =
	/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

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
		postIndex: undefined,
	},
	deliveryType: "",
	privacyPolicy: "",
};
