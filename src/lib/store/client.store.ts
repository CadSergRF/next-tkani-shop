import { create } from "zustand";

import { TUserFromServer } from "@/Types/TClient";
import { devtools } from "zustand/middleware";

export type TClient = {
	client: TUserFromServer | null;
	changeData: (client: TUserFromServer) => void;
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

export const useClientStore = create<TClient>()(
	devtools((set, get) => ({
		client: null,
		changeData: (authClient: TUserFromServer) =>
			set(() => {
				return { client: authClient };
			}),
		changeParam: (param: string | number) => {
			console.log(param);
		},
	})),
);
