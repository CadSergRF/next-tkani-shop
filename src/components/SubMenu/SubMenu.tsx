"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import "./SubMenu.css";

const SubMenu = () => {
	const pathname = usePathname();

	return (
		<nav className="header_submenu">
			<ul className="sub_menu">
				<li className="sub_menu__item">
					<Link
						href="/katalog"
						className={clsx("sub_menu__item_btn", "sub_menu__item_btn_blue")}
					>
						Каталог
					</Link>
				</li>
				<li className="sub_menu__item">
					<Link
						href="/katalog"
						className={clsx("sub_menu__item_btn", "sub_menu__item_btn_pink")}
					>
						Акции
					</Link>
				</li>
				<li className="sub_menu__item">
					<Link
						href="/qa"
						className={clsx("sub_menu__item", {
							sub_menu__item_active: pathname === "/qa",
						})}
					>
						Оформление заказа
					</Link>
				</li>
				<li className="sub_menu__item">
					<Link
						href="/gift-certificate"
						className={clsx("sub_menu__item", {
							sub_menu__item_active: pathname === "/giftcertificate",
						})}
					>
						Подарочные сертификаты
					</Link>
				</li>
				<li className="sub_menu__item">
					<Link
						href="/wholesalers"
						className={clsx("sub_menu__item", {
							sub_menu__item_active: pathname === "/wholesalers",
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
