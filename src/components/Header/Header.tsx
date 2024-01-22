import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { RouteMenu } from "../RouteMenu/RouteMenu";
import { SearchMain } from "../SearchMain/SearchMain";
import { SubMenu } from "../SubMenu/SubMenu";

import styles from "./Header.module.css";

const Header = () => (
	<header className={styles.header}>
		<div className={styles.header__menu}>
			<div className={styles.menu__container}>
				<RouteMenu />
				<div className={styles.menu__phone}>+7-923-490-6508</div>
			</div>
		</div>
		<div className={styles.header__central}>
			<Image
				src="./images/icon-logo.svg"
				width={300}
				height={100}
				alt="Логотип компании Твои ткани"
			/>
			<SearchMain />
			<div className={styles.cart_box}>
				<div className={styles.cart_box__icons}>
					<Link
						href="/personalaccount"
						className={clsx(
							styles.cart_box__link,
							styles.cart_box_link_personal,
						)}
						target="blanc"
					/>
					<Link
						href="/favourites"
						className={clsx(
							styles.cart_box__link,
							styles.cart_box_link_favourites,
						)}
						target="blanc"
					/>
					<Link
						href="/shoppingcart"
						className={clsx(styles.cart_box__link, styles.cart_box_link_cart)}
						target="blanc"
					/>
				</div>
				<Link href="https://wa.me/79234906508?text=Добрый%день." target="blanc">
					<button type="button" className={styles.cart_box__btn}>
						Написать в Whats App
					</button>
				</Link>
			</div>
		</div>
		<SubMenu />
	</header>
);

export { Header };
