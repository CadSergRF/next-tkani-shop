import { TReqSearchCards } from "@/Types/TReqSearch";

export const makeRequestString = (reqObject: TReqSearchCards): string => {
	let requestString = "";
	let key: keyof TReqSearchCards;
	for (key in reqObject) {
		requestString += `&${key}=${reqObject[key]}`;
	}

	return requestString.slice(1);
};
