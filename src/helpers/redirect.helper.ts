"use server";

import { redirect } from "next/navigation";

export const redirectKatalog = async () => {
	redirect("/katalog");
};

export const redirectMain = async () => {
	redirect("/katalog");
};
