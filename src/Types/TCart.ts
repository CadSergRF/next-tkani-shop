import { TCardFull } from "./TCard";
import { TPersonalDeliveryAddress } from "./TClient";

export type TOrderProduct = {
	cartProduct: TCardFull;
	orderQuantity: number;
};

export type TCartFormDelivery = {
	customerData: {
		name: string;
		phoneNumber: string;
		email: string;
	};
	customerAddress: TPersonalDeliveryAddress;
	deliveryType: string;
	privacyPolicy: string;
};

export type TCartFormInput = {
	cart: TOrderProduct[];
	deliveryType: string;
	concentRules: boolean;
};

export type TDeliveryOffice = Required<
	Pick<
		TPersonalDeliveryAddress,
		"town" | "streetHome" | "houseNumber" | "apartment"
	>
>;

export type TDeliveryCourierHomeOffice = Omit<TDeliveryOffice, "town">;

export type TDeliveryPostOffice = Required<
	Pick<
		TPersonalDeliveryAddress,
		"postIndex" | "town" | "streetHome" | "houseNumber" | "apartment"
	>
>;

export type TDeliveryPostAutomat = Omit<TDeliveryPostOffice, "apartment">;

export type TDeliveryObject = {
	title: string;
	name: string;
};

export type TChosenDeliveryMethod = {
	name: string;
	address: TDeliveryObject[];
};

export type TUnionDeliveryMethod =
	| TDeliveryPostAutomat
	| TDeliveryPostOffice
	| TDeliveryCourierHomeOffice
	| TDeliveryOffice;
