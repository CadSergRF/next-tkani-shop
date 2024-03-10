import { NextResponse } from "next/server";

export async function GET() {
	const res = await fetch("http://localhost:3003/checkReq", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await res.json();

	return NextResponse.json(data);
}

export async function POST() {
	const res = await fetch("http://localhost:3003/registration", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: "string",
			email: "post7",
			password: "string",
		}),
	});

	const data = await res.json();

	return NextResponse.json(data);
}
