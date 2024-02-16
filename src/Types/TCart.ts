import { TCardMainInfo } from "./TCard";

export const DeliveryMethod = [
	"Предложите мне несколько вариантов доставки на выбор",
	"Самовывоз с пункта выдачи: г. Кемерово, пр. Октябрьский, 28",
	"Курьерская доставка по г. Кемерово",
	"Почта России (посылка в отделение)",
	"Почта России (почтомат)",
	"СДЭК до пункта выдачи",
	"СДЭК курьером до двери",
	"Транспортная компания Энергия",
	"Транспортная компания ПЭК",
];

export type TOrderProduct = {
	cartProduct: TCardMainInfo;
	orderQuantity: number;
};

export type TCartFormDelivery = {
	deliveryType: string;
	privacyPolicy: string;
};

export type TCartFormInput = {
	cart: TOrderProduct[];
	deliveryType: string;
	concentRules: boolean;
};
