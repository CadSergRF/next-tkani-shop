"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./SubMenu.module.css";

const SubMenu = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.header_submenu}>
			<ul className={styles.sub_menu}>
				<li className={styles.sub_menu__item}>
					<Link
						href="/katalog"
						className={clsx(
							styles.sub_menu__item_btn,
							styles.sub_menu__item_btn_blue,
						)}
					>
						Каталог
					</Link>
				</li>
				<li className={styles.sub_menu__item}>
					<Link
						href="/katalog"
						className={clsx(
							styles.sub_menu__item_btn,
							styles.sub_menu__item_btn_pink,
						)}
					>
						Акции
					</Link>
				</li>
				<li className={styles.sub_menu__item}>
					<Link
						href="/qa"
						className={clsx(styles.sub_menu__item, {
							[styles.sub_menu__item_active]: pathname === "/qa",
						})}
					>
						Оформление заказа
					</Link>
				</li>
				<li className={styles.sub_menu__item}>
					<Link
						href="/gift-certificate"
						className={clsx(styles.sub_menu__item, {
							[styles.sub_menu__item_active]: pathname === "/gift-certificate",
						})}
					>
						Подарочные сертификаты
					</Link>
				</li>
				<li className={styles.sub_menu__item}>
					<Link
						href="/wholesalers"
						className={clsx(styles.sub_menu__item, {
							[styles.sub_menu__item_active]: pathname === "/wholesalers",
						})}
					>
						Оптовикам
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { SubMenu };
