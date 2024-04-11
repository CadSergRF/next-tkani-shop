import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import { TReqSearchCards } from "@/Types/TReqSearch";
import { initialGetCardsRequest } from "../constants/cards.constants";

type reqSearchCardsState = {
	reqSearch: TReqSearchCards;
	changeSection: (newSection: string) => void;
	changePicture: (newPicture: string) => void;
	changeColor: (newColor: string) => void;
	changeSearchName: (newSearchName: string) => void;
	changeSortName: (newSortName: string) => void;
	changePaginationPage: (newPage: string) => void;
	changePaginationLimit: (newPageLimit: string) => void;
};

export const useReqSearchStore = create<reqSearchCardsState>()(
	devtools(
		// persist(
		(set, get) => ({
			reqSearch: initialGetCardsRequest,
			changeSection: (newSection: string) =>
				set(() => {
					const newReq = get().reqSearch;
					newReq.sectionName = newSection;
					return { reqSearch: newReq };
				}),
			changePicture: (newPicture: string) =>
				set(() => {
					const newReq = get().reqSearch;
					if (newReq.pictureName.includes(newPicture)) {
						newReq.pictureName.splice(
							newReq.pictureName.indexOf(newPicture),
							1,
						);
					} else {
						newReq.pictureName.push(newPicture);
					}
					return { reqSearch: newReq };
				}),
			changeColor: (newColor: string) =>
				set(() => {
					const newReq = get().reqSearch;
					if (newReq.colorName.includes(newColor)) {
						newReq.colorName.splice(newReq.colorName.indexOf(newColor), 1);
					} else {
						newReq.colorName.push(newColor);
					}
					return { reqSearch: newReq };
				}),
			changeSearchName: (newSearchName: string) =>
				set(() => {
					let newReq = get().reqSearch;
					newReq = initialGetCardsRequest;
					newReq.searchName = newSearchName;
					return { reqSearch: newReq };
				}),
			changeSortName: (newSortName: string) =>
				set(() => {
					const newReq = get().reqSearch;
					newReq.sortName = newSortName;
					return { reqSearch: newReq };
				}),
			changePaginationPage: (newPage: string) =>
				set(() => {
					const newReq = get().reqSearch;
					newReq.paginationPage = parseInt(newPage);
					return { reqSearch: newReq };
				}),
			changePaginationLimit: (newPageLimit: string) =>
				set(() => {
					const newReq = get().reqSearch;
					newReq.paginationLimit = parseInt(newPageLimit);
					return { reqSearch: newReq };
				}),
		}),
		{ name: "reqSearchStore" },
	),
	// ),
);
