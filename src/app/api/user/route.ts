import { NextResponse } from "next/server";

export async function GET() {
	const res = await fetch("http://localhost:3003/checkReq", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const { message } = await res.json();

	return Response.json({ message: message });
}
