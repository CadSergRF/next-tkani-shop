import Link from "next/link";
import clsx from "clsx";

import styles from "./WriteSocialBtn.module.css";

type Props = {
	link: string;
	text: string;
	color: "blue" | "green";
};

const WriteSocialBtn = ({ link, text, color }: Props) => {
	return (
		<Link href={link} target="blanc">
			<button
				type="button"
				className={clsx(styles.write_social__btn, {
					[styles.write_social__btn_color_blue]: color === "blue",
					[styles.write_social__btn_color_green]: color === "green",
				})}
			>
				{text}
			</button>
		</Link>
	);
};

export { WriteSocialBtn };
