export const defaultFakeDeliveryAddress = {
	town: "Кемерово",
	streetHome: "пр. Октябрьский",
	houseNumber: "28",
	apartment: "814",
	floor: "8",
	entrance: "1",
	intercom: "814",
	postIndex: "650066",
};

const defaultDeliveryAddress = {
	town: "",
	streetHome: "",
	houseNumber: "",
	apartment: "",
	floor: "",
	entrance: "",
	intercom: "",
	postIndex: "",
};

export const defaultOrderData = {
	cart: [],
	customerData: {
		name: "",
		phoneNumber: "",
		email: "",
	},
	customerAddress: defaultDeliveryAddress,
	deliveryType: "",
	privacyPolicy: "",
};

export const DeliveryMethod = [
	{ name: "Предложите мне несколько вариантов доставки на выбор" },
	{ name: "Самовывоз с пункта выдачи: г. Кемерово, пр. Октябрьский, 28" },
	{ name: "Курьерская доставка по г. Кемерово" },
	{ name: "Почта России (посылка в отделение)" },
	{ name: "Почта России (почтомат)" },
	{ name: "СДЭК до пункта выдачи" },
	{ name: "СДЭК курьером до двери" },
	{ name: "Транспортная компания Энергия" },
	{ name: "Транспортная компания ПЭК" },
];

export const addressOffice = [
	{ title: "Населенный пункт*", name: "customerAddress.town" },
	{ title: "Улица*", name: "customerAddress.streetHome" },
	{ title: "Номер дома*", name: "customerAddress.houseNumber" },
	{
		title: "Номер офиса/квартиры*",
		name: "customerAddress.apartment",
	},
];

export const addressCourierHomeOffice = [
	{ title: "Улица*", name: "customerAddress.streetHome" },
	{ title: "Номер дома*", name: "customerAddress.houseNumber" },
	{ title: "Номер офиса/квартиры*", name: "customerAddress.apartment" },
];

export const addressPostOffice = [
	{ title: "Индекс*", name: "customerAddress.postIndex" },
	{ title: "Населенный пункт*", name: "customerAddress.town" },
	{ title: "Улица*", name: "customerAddress.streetHome" },
	{ title: "Номер дома*", name: "customerAddress.houseNumber" },
	{ title: "Номер квартиры*", name: "customerAddress.apartment" },
];

export const addressPostAutomat = [
	{ title: "Индекс*", name: "customerAddress.postIndex" },
	{ title: "Населенный пункт*", name: "customerAddress.town" },
	{ title: "Улица*", name: "customerAddress.streetHome" },
	{ title: "Номер дома*", name: "customerAddress.houseNumber" },
];
