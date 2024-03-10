import { create } from "zustand";

import { TPersonalFullData } from "@/Types/TClient";

export type TClient = {
	client: TPersonalFullData | null;
	changeData: (client: TPersonalFullData) => void;
	changeParam: (param: string | number) => void;
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

export const useClientStore = create<TClient>()((set, get) => ({
	client: emptyClient,
	changeData: (client: TPersonalFullData) =>
		set(() => {
			return { client: client };
		}),
	changeParam: (param: string | number) => {
		console.log(param);
	},
}));
