import React from "react";
import Image from "next/image";

import { RouteMenu } from "../RouteMenu/RouteMenu";
import { SearchMain } from "../SearchMain/SearchMain";
import { SubMenu } from "../SubMenu/SubMenu";

import styles from "./Header.module.css";
import { WriteSocialBtn } from "../ui-kit/WriteSocialBtn/WriteSocialBtn";
import { HeaderClientMenu } from "./HeaderClientMenu/HeaderClientMenu";

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
			<HeaderClientMenu />
		</div>
		<SubMenu />
	</header>
);

export { Header };
