"use server";

import { TGetSearchProductResponse } from "@/Types/TResponse";

const { EXTERNAL_SERVER_HOST } = process.env;

export const getSearchAllCards = async (
	url: string,
): Promise<TGetSearchProductResponse | undefined> => {
	try {
		const allSearchCards: Response = await fetch(
			`${EXTERNAL_SERVER_HOST}${url}`,
			{
				cache: "default",
			},
		);
		const resAllSearchCards = await allSearchCards.json();
		return resAllSearchCards;
	} catch (err) {
		console.log("Ошибка ", err);
		return undefined;
	}
};
