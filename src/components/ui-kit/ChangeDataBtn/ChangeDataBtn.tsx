import "./ChangeDataBtn.css";

type Props = {
	text: string;
};

const ChangeDataBtn = ({ text }: Props) => {
	return (
		<button type="button" className="change-data-btn">
			{text}
		</button>
	);
};

export { ChangeDataBtn };
