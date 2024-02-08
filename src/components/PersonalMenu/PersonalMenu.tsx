"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./PersonalMenu.module.css";

const PersonalMenu = () => {
	const pathname = usePathname();

	return (
		<ul className={styles.personal_menu}>
			<li>
				<Link
					href="/personal-account/personal-data"
					className={clsx(styles.personal_menu__item, {
						[styles.personal_menu__item_active]:
							pathname === "/personal-account/personal-data",
					})}
				>
					Личные данные
				</Link>
			</li>
			<li>
				<Link
					href="/personal-account/cart"
					className={clsx(styles.personal_menu__item, {
						[styles.personal_menu__item_active]:
							pathname === "/personal-account/cart",
					})}
				>
					Корзина
				</Link>
			</li>
			<li>
				<Link
					href="/personal-account/favourites"
					className={clsx(styles.personal_menu__item, {
						[styles.personal_menu__item_active]:
							pathname === "/personal-account/favourites",
					})}
				>
					Избранное
				</Link>
			</li>
			<li>
				<Link
					href="/personal-account/my-orders"
					className={clsx(styles.personal_menu__item, {
						[styles.personal_menu__item_active]:
							pathname === "/personal-account/my-orders",
					})}
				>
					Мои заказы
				</Link>
			</li>
			<li>
				<Link
					href="/personal-account/delivery-address"
					className={clsx(styles.personal_menu__item, {
						[styles.personal_menu__item_active]:
							pathname === "/personal-account/delivery-address",
					})}
				>
					Адрес доставки
				</Link>
			</li>
			<li>
				<Link
					href="/personal-account/client-card"
					className={clsx(styles.personal_menu__item, {
						[styles.personal_menu__item_active]:
							pathname === "/personal-account/client-card",
					})}
				>
					Карта покупателя
				</Link>
			</li>
			<li>
				<Link
					href="/personal-account/balance"
					className={clsx(styles.personal_menu__item, {
						[styles.personal_menu__item_active]:
							pathname === "/personal-account/balance",
					})}
				>
					Баланс
				</Link>
			</li>
		</ul>
	);
};

export { PersonalMenu };
