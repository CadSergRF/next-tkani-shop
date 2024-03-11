"use client";

import Link from "next/link";
import useSWR from "swr";

import { useClientStore } from "@/lib/store/client.store";

import styles from "./PersonalItem.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const PersonalItem = () => {
	// Достаем пользователя из стора
	const { client } = useClientStore();

	// Если клиента нет проверяем его авторизацию через токены в cookies
	if (!client) {
		const { data, error, isLoading } = useSWR(`api/user/checkLogin`, fetcher);
	}

	return (
		<Link
			href={client ? "/personal-account" : "/login"}
			className={styles.personal_item__link}
		>
			<p className={styles.personal_item__text}>{client ? `Имя` : "Войти"}</p>
		</Link>
	);
};

export { PersonalItem };
