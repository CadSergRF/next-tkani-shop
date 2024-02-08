import clsx from "clsx";

import styles from "./ChangeDataBtn.module.css";

type Props = {
	text: string;
	color: "gray" | "blue";
	size?: "medium" | "little";
};

const ChangeDataBtn = ({ text, color, size = "medium" }: Props) => {
	return (
		<button
			type="button"
			className={clsx(styles.change_data_btn, {
				[styles.change_data_btn__blue]: color === "blue",
				[styles.change_data_btn__gray]: color === "gray",
				[styles.change_data_btn__size_little]: size === "little",
			})}
		>
			{text}
		</button>
	);
};

export { ChangeDataBtn };
