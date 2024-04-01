import { NextResponse, type NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface InternJWT {
	name: string;
	role: string;
}

const {
	EXTERNAL_SERVER_HOST,
	INTERN_TOKEN_NAME,
	INTERN_REFRESH_TOKEN_NAME,
	INTERN_JWT_SECRET,
} = process.env;

export async function GET(req: NextRequest, res: NextResponse) {
	// Если в .env не прописаны переменные выдаем ошибку
	if (
		!EXTERNAL_SERVER_HOST ||
		!INTERN_TOKEN_NAME ||
		!INTERN_REFRESH_TOKEN_NAME ||
		!INTERN_JWT_SECRET
	) {
		return NextResponse.json(
			{ statusText: "Переменные авторизации не найдены" },
			{ status: 400 },
		);
	}
	try {
		const accessToken = req.cookies.get(INTERN_TOKEN_NAME);
		const refreshTokenCookies = req.cookies.get(INTERN_REFRESH_TOKEN_NAME);

		// Есть -> возвращаем из cookies имя и роль
		if (refreshTokenCookies) {
			try {
				let { name, role } = jwt.verify(
					refreshTokenCookies.value,
					INTERN_REFRESH_TOKEN_NAME && INTERN_JWT_SECRET
						? INTERN_JWT_SECRET
						: "some-secret-key",
				) as InternJWT;
				return NextResponse.json(
					{ userName: name, userRole: role },
					{ status: 200 },
				);
			} catch (err) {
				return NextResponse.json(
					{ statusText: "Ошибка верификации" },
					{ status: 503 },
				);
			}
		}
		// Если нет refresh достаем access token
		// const accessToken = req.cookies.get(INTERN_TOKEN_NAME);
		if (!accessToken) {
			return NextResponse.json(
				{ statusText: "Пользователь не авторизован(допуск)" },
				{ status: 401 },
			);
		}
		// Есть -> делаем запрос на бэк для подтверждения пользователя
		const resAccess = await fetch(`${EXTERNAL_SERVER_HOST}/checkuserlogin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				token: accessToken.value,
			}),
		});
		// Если получили ошибку запроса на внешний сервер
		if (resAccess) {
			const respAccess = await resAccess.json(); // Получаем json
			// Формируем refresh token
			const secretKey: string =
				INTERN_REFRESH_TOKEN_NAME && INTERN_JWT_SECRET
					? INTERN_JWT_SECRET
					: "some-secret-key";

			const refreshToken = jwt.sign(
				{ name: respAccess.userFullName.name, role: respAccess.role },
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
			// "тело ответа"
			return NextResponse.json(
				{ userName: respAccess.userFullName.name, userRole: respAccess.role },
				{ status: resAccess.status },
			);
		}
	} catch (error) {
		// Другие возможные ошибки выполнения запроса
		return NextResponse.json(
			{ statusText: "Пользователь не авторизован" },
			{ status: 503 },
		);
	}
}
