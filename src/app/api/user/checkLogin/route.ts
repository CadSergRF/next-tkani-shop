import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

const { EXTERNAL_SERVER_HOST, INTERN_TOKEN_NAME } = process.env;

export async function GET(req: NextRequest) {
	try {
		// Проверяем имя токена в env.
		if (INTERN_TOKEN_NAME) {
			// Достаем токен из cookies из запроса
			const token = req.cookies.get(INTERN_TOKEN_NAME);
			if (token) {
				// делаем запрос на бэк для подтверждения пользователя
				const res = await fetch(`${EXTERNAL_SERVER_HOST}/checkuserlogin`);
				const resp = await res.json();

				return new Response(
					JSON.stringify({ message: "Пользователь авторизован" }),
					{
						status: 200,
						headers: { "Set-Cookie": `${INTERN_TOKEN_NAME}=${resp.secret}` },
					},
				);
			}
			return new Response(
				JSON.stringify({ message: "Пользователь не авторизован" }),
				{
					status: 401,
				},
			);
		}
		return new Response(
			JSON.stringify({ message: "Пользователь не авторизован" }),
			{
				status: 401,
			},
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 503,
		});
	}
}
