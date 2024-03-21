import { TFormValuesLogin } from "@/Types/TForms";
import { PUBLIC_HOST } from "@/lib/constants/host.constants";
import { useClientStore } from "@/lib/store/client.store";

// Запрос в серверную часть
export const fetcher = async (url: string) => {
	const res: Response = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		return Promise.reject(`Ошибка в Api: ${res.status} ${res.statusText}`);
	}
	return res.json();
};

// Проверка авторизации пользователя и установка начального стейта
export const checkLogin = async () => {
	const res: Response = await fetch(`${PUBLIC_HOST}/api/user/checkLogin`, {
		cache: "no-store",
	});
	const resJson = await res.json();

	if (!res.ok) {
		return Promise.reject(`${resJson.error}`);
	}

	useClientStore.setState({ client: resJson.user });
	return resJson.message;
};

// Проверка авторизации пользователя и установка начального стейта
export const userLoginFetch = async (data: TFormValuesLogin) => {
	const res: Response = await fetch(`${PUBLIC_HOST}/api/user/signin`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: data.loginEmail,
			password: data.loginPassword,
		}),
	});

	const resJson = await res.json();

	if (!res.ok) {
		return Promise.reject(`${resJson.error}`);
	}

	console.log(resJson.user);

	useClientStore.setState({ client: resJson.user });
	return resJson.message;
};
