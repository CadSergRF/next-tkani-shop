import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const { EXTERNAL_SERVER_HOST, INTERN_TOKEN_NAME } = process.env;

export async function POST(req: NextRequest) {
	// Получаем "тело" запроса
	const reqBody = await req.json();
	// Запрос на внешний сервер
	const resLogin = await fetch(`${EXTERNAL_SERVER_HOST}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: reqBody.email,
			password: reqBody.password,
		}),
	});
	// Получаем тело ответа
	const loginData = await resLogin.json();
	// Если ошибка от сервера => отправляем её на фронт
	if (!resLogin.ok) {
		return NextResponse.json(
			{ error: loginData.message },
			{ status: resLogin.status },
		);
	}
	// Если !ошибка формируем ответ
	// устанавливаем cookies
	if (INTERN_TOKEN_NAME) {
		cookies().set({
			name: INTERN_TOKEN_NAME,
			value: loginData.secret,
			httpOnly: true,
			maxAge: 365 * 24 * 60 * 60,
			path: "/",
		});
	}
	// "тело ответа"
	return NextResponse.json(
		{ user: loginData.user, message: "Успешная авторизация" },
		{ status: resLogin.status },
	);
}
