import { PUBLIC_HOST } from "@/lib/constants/host.constants";
import { useClientStore } from "@/lib/store/client.store";

// Округление до десятой
export const roundedNum = (item: number, decimalPlaces: number): number => {
	const roundNum =
		Math.round((item + Number.EPSILON) * 10 ** decimalPlaces) /
		10 ** decimalPlaces;

	return roundNum;
};

// Запрос в серверную часть для useSWR на 'use client',
// и обычных запросов на 'use server'
export const fetcher = async (url: string) => {
	try {
		const req = await fetch(url, { cache: "no-store" });
		const result = await req.json();
		return result;
	} catch (err) {
		return err;
	}
};

// Проверка авторизации пользователя и установка начального стейта
export const checkLogin = async () => {
	try {
		const data = await fetcher(`${PUBLIC_HOST}/api/user/checkLogin`);
		if (data) {
			useClientStore.setState({ client: data.user });
		}
	} catch (err) {
		return err;
	}
};
