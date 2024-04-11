import useSWR, { KeyedMutator } from "swr";

import { getSearchAllCards } from "@/utils/fetch/cards.fetch";
import { TCardFull } from "@/Types/TCard";
import { useReqSearchStore } from "@/lib/store/reqSearchCards.store";
import { TGetSearchProductResponse } from "@/Types/TResponse";

type TSearchCardsRes = {
	// cards: TCardFull[] | undefined;
	cards: TGetSearchProductResponse | undefined;
	isLoading: boolean;
	isError: any;
	mutate: KeyedMutator<TGetSearchProductResponse | undefined>;
};

export const useSearchCards = (): TSearchCardsRes => {
	const { reqSearch } = useReqSearchStore();

	const searchURL = `/cards/search-cards?section=${reqSearch.sectionName}&picture=${reqSearch.pictureName}&color=${reqSearch.colorName}&searchStr=${reqSearch.searchName}&sortStr=${reqSearch.sortName}&paginationLimit=${reqSearch.paginationLimit}&paginationPage=${reqSearch.paginationPage}`;
	
	const { data, error, isLoading, mutate } = useSWR<
		TGetSearchProductResponse | undefined
	>(`${searchURL}`, getSearchAllCards);

	return {
		cards: data,
		isLoading,
		isError: error,
		mutate,
	};
};
