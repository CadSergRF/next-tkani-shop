import clsx from "clsx";
import "./ChangeDataBtn.css";

type Props = {
	text: string;
	color: "gray" | "blue";
	size?: "medium" | "little";
};

const ChangeDataBtn = ({ text, color, size = "medium" }: Props) => {
	return (
		<button
			type="button"
			className={clsx("change-data-btn", {
				"change-data-btn_blue": color === "blue",
				"change-data-btn_gray": color === "gray",
				"change-data-btn_size-little": size === "little",
			})}
		>
			{text}
		</button>
	);
};

export { ChangeDataBtn };
