"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useClientStore } from "@/lib/store/client.store";

import styles from "./PersonalItem.module.css";
import { checkLogin } from "@/utils/fetch.utils";

const PersonalItem = () => {
	// Достаем пользователя из стора
	const client = useClientStore((state) => state.client);

	useEffect(() => {
		if (!client) {
			checkLogin();
		}
	}, []);

	return (
		<Link
			href={client ? "/personal-account" : "/login"}
			className={styles.personal_item__link}
		>
			<p className={styles.personal_item__text}>
				{client ? `${client.userName}` : "Войти"}
			</p>
		</Link>
	);
};

export { PersonalItem };
