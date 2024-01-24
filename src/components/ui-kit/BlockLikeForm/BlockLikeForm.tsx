import "./BlockLikeForm.css";

type Props = {
	title: string;
	text: string;
};

const BlockLikeForm = ({ title, text }: Props) => {
	return (
		<div className="block-like-form__container">
			<h3 className="block-like-form__title">{title}</h3>
			<p className="block-like-form__text">{text}</p>
		</div>
	);
};

export { BlockLikeForm };
