import Link from "next/link";
import clsx from "clsx";

import styles from "./HCMItem.module.css";

type Props = {
	path: string;
};

const HCMItem = ({ path }: Props) => {
	return (
		<Link
			href={path}
			className={clsx(styles.cart_box__link, {
				[styles.cart_box_link_personal]: path === "/personal-account",
				[styles.cart_box_link_favourites]: path === "/favourites",
				[styles.cart_box_link_cart]: path === "/shopping-cart",
			})}
		/>
	);
};

export { HCMItem };
