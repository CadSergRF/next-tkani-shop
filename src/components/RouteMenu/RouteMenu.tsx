"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import "./RouteMenu.css";

const RouteMenu = () => {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="menu">
				<li>
					<Link
						href="/"
						className={clsx("menu__item", {
							menu__item_active: pathname === "/",
						})}
					>
						Главная
					</Link>
				</li>
				<li>
					<Link
						href="/aboutcompany"
						className={clsx("menu__item", {
							menu__item_active: pathname === "/aboutcompany",
						})}
					>
						О компании
					</Link>
				</li>
				<li>
					<Link
						href="/qa"
						className={clsx("menu__item", {
							menu__item_active: pathname === "/qa",
						})}
					>
						Вопрос-Ответ
					</Link>
				</li>
				<li>
					<Link
						href="/news"
						className={clsx("menu__item", {
							menu__item_active: pathname === "/news",
						})}
					>
						Новости
					</Link>
				</li>
				<li>
					<Link
						href="/contacts"
						className={clsx("menu__item", {
							menu__item_active: pathname === "/contacts",
						})}
					>
						Контакты
					</Link>
				</li>
				<li>
					<Link
						href="/wholesalers"
						className={clsx("menu__item", {
							menu__item_active: pathname === "/wholesalers",
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
