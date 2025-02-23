import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { RouteMenu } from "../RouteMenu/RouteMenu";
import { SearchMain } from "../SearchMain/SearchMain";
import { SubMenu } from "../SubMenu/SubMenu";

import styles from "./Header.module.css";
import { WriteSocialBtn } from "../ui-kit/WriteSocialBtn/WriteSocialBtn";

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
				src="/images/icon-logo.svg"
				width={300}
				height={100}
				alt="Логотип компании Твои ткани"
				priority={true}
			/>
			<SearchMain />
			<div className={styles.cart_box}>
				<div className={styles.cart_box__icons}>
					<Link
						href="/personal-account"
						className={clsx(
							styles.cart_box__link,
							styles.cart_box_link_personal,
						)}
					/>
					<Link
						href="/favourites"
						className={clsx(
							styles.cart_box__link,
							styles.cart_box_link_favourites,
						)}
					/>
					<Link
						href="/shopping-cart"
						className={clsx(styles.cart_box__link, styles.cart_box_link_cart)}
					/>
				</div>
				<WriteSocialBtn
					link="https://wa.me/79234906508?text=Добрый%день."
					text="Написать в WhatsApp"
					color="blue"
				/>
			</div>
		</div>
		<SubMenu />
	</header>
);

export { Header };
