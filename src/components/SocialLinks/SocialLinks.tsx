import Link from "next/link";
import clsx from "clsx";

import styles from "./SocialLinks.module.css";

const SocialLinks = () => (
	<nav className={styles.social_links}>
		<Link
			href="https://t.me/Tvoi_tkani"
			className={clsx(styles.social_link, styles.social_link_telegram)}
			target="blanc"
		/>
		<Link
			href="https://www.instagram.com/tvoi_tkani/"
			className={clsx(styles.social_link, styles.social_link_instagram)}
			target="blanc"
		/>
		<Link
			href="https://vk.com/tvoi_tkani"
			className={clsx(styles.social_link, styles.social_link_vk)}
			target="blanc"
		/>
	</nav>
);

export { SocialLinks };
