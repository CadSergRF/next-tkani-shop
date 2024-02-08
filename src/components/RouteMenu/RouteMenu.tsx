"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./RouteMenu.module.css";

const RouteMenu = () => {
	const pathname = usePathname();

	return (
		<nav>
			<ul className={styles.menu}>
				<li>
					<Link
						href="/"
						className={clsx(styles.menu__item, {
							[styles.menu__item_active]: pathname === "/",
						})}
					>
						Главная
					</Link>
				</li>
				<li>
					<Link
						href="/about-company"
						className={clsx(styles.menu__item, {
							[styles.menu__item_active]: pathname === "/aboutcompany",
						})}
					>
						О компании
					</Link>
				</li>
				<li>
					<Link
						href="/qa"
						className={clsx(styles.menu__item, {
							[styles.menu__item_active]: pathname === "/qa",
						})}
					>
						Вопрос-Ответ
					</Link>
				</li>
				<li>
					<Link
						href="/news"
						className={clsx(styles.menu__item, {
							[styles.menu__item_active]: pathname === "/news",
						})}
					>
						Новости
					</Link>
				</li>
				<li>
					<Link
						href="/contacts"
						className={clsx(styles.menu__item, {
							[styles.menu__item_active]: pathname === "/contacts",
						})}
					>
						Контакты
					</Link>
				</li>
				<li>
					<Link
						href="/wholesalers"
						className={clsx(styles.menu__item, {
							[styles.menu__item_active]: pathname === "/wholesalers",
						})}
					>
						Оптовикам
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { RouteMenu };
