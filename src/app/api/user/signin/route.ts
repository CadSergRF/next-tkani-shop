import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const {
	EXTERNAL_SERVER_HOST,
	INTERN_TOKEN_NAME,
	INTERN_REFRESH_TOKEN_NAME,
	INTERN_JWT_SECRET,
} = process.env;

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
	if (INTERN_TOKEN_NAME && INTERN_REFRESH_TOKEN_NAME) {
		// Access token
		cookies().set({
			name: INTERN_TOKEN_NAME,
			value: loginData.secret,
			httpOnly: true,
			maxAge: 365 * 24 * 60 * 60,
			path: "/",
		});

		// Формируем refresh token
		const secretKey: string =
			INTERN_REFRESH_TOKEN_NAME && INTERN_JWT_SECRET
				? INTERN_JWT_SECRET
				: "some-secret-key";

		const refreshToken = jwt.sign(
			{ name: loginData.userFullName.name, role: loginData.role },
			secretKey,
			{
				expiresIn: "1d",
			},
		);
		cookies().set({
			name: INTERN_REFRESH_TOKEN_NAME,
			value: refreshToken,
			httpOnly: true,
			maxAge: 24 * 60 * 60,
			path: "/",
		});
	}
	// "тело ответа"
	return NextResponse.json(
		{ message: "Успешная авторизация" },
		{ status: resLogin.status },
	);
}
