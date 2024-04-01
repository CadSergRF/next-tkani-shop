import { create } from "zustand";

import { TUserFromServer } from "@/Types/TClient";
import { devtools } from "zustand/middleware";

export type TClient = {
	client: TUserFromServer | null;
	changeData: (client: TUserFromServer) => void;
	changeParam: (param: string | number) => void;
};

export type TLoaded = {
	loaded: boolean;
};

export type TClientStore = TClient & TLoaded;

export const useClientStore = create<TClientStore>()(
	devtools((set, get) => ({
		client: null,
		loaded: true,
		changeData: (authClient: TUserFromServer) =>
			set(() => {
				return { client: authClient };
			}),
		changeParam: (param: string | number) => {
			console.log(param);
		},
	})),
);
