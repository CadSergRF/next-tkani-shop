"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./PersonalItem.module.css";
import { useClientStore } from "@/lib/store/client.store";

const PersonalItem = () => {
	const { client } = useClientStore();

	return (
		<Link
			href={client ? "/personal-account" : "/login"}
			className={styles.personal_item__link}
		>
			<Image
				src="/images/icons/icon-user.svg"
				width={25}
				height={25}
				alt="Picture of the author"
			/>
			<p className={styles.personal_item__text}>{client ? `Имя` : "Войти"}</p>
		</Link>
	);
};

export { PersonalItem };
