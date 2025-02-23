import React from "react";
import Link from "next/link";

import styles from "./Footer.module.css";

import { SocialLinks } from "../SocialLinks/SocialLinks";

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.footer_nav}>
			<p className={styles.footer_nav_underline}>Обработка онлайн-заказов</p>
			<p>ПН-СБ с 06:00 до 19:00 МСК</p>
			<nav className={styles.footer_nav_block}>
				<ul className={styles.footer_nav_link_list}>
					<li>
						<Link href="/about-company" className={styles.footer_nav_link}>
							О интернет-магазине
						</Link>
					</li>
					<li>
						<Link href="/qa" className={styles.footer_nav_link}>
							Обмен и возврат товара
						</Link>
					</li>
					<li>
						<Link href="/qa" className={styles.footer_nav_link}>
							Правила пользования сайтом
						</Link>
					</li>
					<li>
						<Link href="/wholesalers" className={styles.footer_nav_link}>
							Оптовикам
						</Link>
					</li>
					<li>
						<Link href="/qa" className={styles.footer_nav_link}>
							Вопрос-ответ
						</Link>
					</li>
					<li>
						<Link href="/contacts" className={styles.footer_nav_link}>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
		</div>
		<div className={styles.footer_social}>
			<SocialLinks />
		</div>
		<div className={styles.footer_phone}>тел. +7 923 490 6508</div>
		<div className={styles.footer_company}>
			<p>ИП Никитина Евгения Юрьевна</p>
			<p>ИНН: 423081423508</p>
			<p>ОГРНИП: 317420500082823</p>
		</div>
		<div className={styles.footer_info}>
			<Link
				href="/personal-data-processing-policy"
				className={styles.footer_info_policy}
			>
				Политика обработки персональных данных.
			</Link>
			<p>Интернет-магазин тканей для шитья и рукоделия. 2024.</p>
			<p>Россия, город Кемерово, пр. Октябрьский, 28</p>
		</div>
		<div className={styles.footer_make}>Разработка сайта CSRF</div>
	</footer>
);

export { Footer };
