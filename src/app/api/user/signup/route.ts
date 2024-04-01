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

	console.log(reqBody);
}
