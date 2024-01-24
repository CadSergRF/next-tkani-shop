import Link from "next/link";

import "./WriteSocialBtn.css";
import clsx from "clsx";

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
				className={clsx("write_social__btn", {
					write_social__btn_color_blue: color === "blue",
					write_social__btn_color_green: color === "green",
				})}
			>
				{text}
			</button>
		</Link>
	);
};

export { WriteSocialBtn };
