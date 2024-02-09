import { create } from "zustand";

import { TPersonalFullData } from "@/Types/TClient";

export type TClientSlice = {
	client: TPersonalFullData;
	changeData: (client: TPersonalFullData) => void;
	changeAddress: (client: TPersonalFullData) => void;
};

export const emptyClient = {
	id: "-",
	fullName: "-",
	phoneNumber: "-",
	birthday: "-",
	eMail: "-",
	clientCard: "-",
	postIndex: "-",
	town: "-",
	streetHome: "-",
	apartment: "-",
	floor: "-",
	entrance: "-",
	intercom: "-",
};

export const createClientSlice = create<TClientSlice>()((set, get) => ({
	client: emptyClient,
	changeData: (client: TPersonalFullData) => {
		console.log(client);
	},
	changeAddress: (client: TPersonalFullData) => {
		console.log(client);
	},
}));
