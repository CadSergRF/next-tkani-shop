"use server";

const { EXTERNAL_SERVER_HOST } = process.env;

export const postOrderDispatch = async (
	url: string,
	bodyCart: any,
): Promise<string> => {
	const orderDispatch: Response = await fetch(`${EXTERNAL_SERVER_HOST}${url}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(bodyCart),
		cache: "no-cache",
	});

	return !orderDispatch.ok
		? orderDispatch.json().then((data) => Promise.reject({ data }))
		: orderDispatch.status === 204
			? Promise.resolve(orderDispatch.status)
			: orderDispatch.json();
};
