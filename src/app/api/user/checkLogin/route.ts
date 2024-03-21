import { NextResponse, type NextRequest } from "next/server";

const { EXTERNAL_SERVER_HOST, INTERN_TOKEN_NAME } = process.env;

export async function GET(req: NextRequest, res: NextResponse) {
	try {
		// Проверяем имя токена в env.
		if (INTERN_TOKEN_NAME) {
			// Достаем токен из cookies из запроса
			const token = req.cookies.get(INTERN_TOKEN_NAME);
			if (token) {
				// делаем запрос на бэк для подтверждения пользователя
				const res = await fetch(`${EXTERNAL_SERVER_HOST}/checkuserlogin`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						token: token.value,
					}),
				});
				// Если ответ получен
				if (res.ok) {
					const resp = await res.json(); // Получаем json
					const { loggedIn, user } = resp;
					// формируем ответ
					return new Response(
						JSON.stringify({
							message: "Пользователь авторизован",
							user: user,
						}),
						{
							status: 200,
						},
					);
				}
				// Если получили ошибку запроса на внешний сервер
				return new Response(JSON.stringify({ error: "Ошибка сервера" }), {
					status: 500,
				});
			}
			// если в запросе не token возвращаем ошибку
			return new Response(
				JSON.stringify({ error: "Пользователь не авторизован" }),
				{
					status: 401,
				},
			);
		}
		// Если в .env не прописан token name возвращаем ошибку
		return new Response(
			JSON.stringify({ error: "Переменные авторизации не найдены" }),
			{
				status: 400,
			},
		);
	} catch (error) {
		// Другие возможные ошибки выполнения запроса
		return new Response(JSON.stringify({ error: error }), {
			status: 503,
		});
	}
}
