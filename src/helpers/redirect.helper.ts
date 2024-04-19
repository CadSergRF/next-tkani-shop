"use server";

import { redirect } from "next/navigation";

export const katalogRedirect = async () => {
	redirect("/katalog");
};

export const mainRedirect = async () => {
	redirect("/katalog");
};
