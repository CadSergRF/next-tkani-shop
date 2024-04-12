import useSWR, { KeyedMutator } from "swr";

import { getSearchAllCards } from "@/utils/fetch/cards.fetch";
import { useReqSearchStore } from "@/lib/store/reqSearchCards.store";
import { TGetSearchProductResponse } from "@/Types/TResponse";
import { makeRequestString } from "@/helpers/requestSearch.helper";

type TSearchCardsRes = {
	cards: TGetSearchProductResponse | undefined;
	isLoading: boolean;
	isError: any;
	mutate: KeyedMutator<TGetSearchProductResponse | undefined>;
};

export const useSearchCards = (): TSearchCardsRes => {
	const { reqSearch } = useReqSearchStore();
	const searchParamStr = makeRequestString(reqSearch);
	const searchURL = `/cards/search-cards?${searchParamStr}`;

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
