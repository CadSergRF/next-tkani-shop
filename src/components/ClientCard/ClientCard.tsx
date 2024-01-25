import Image from "next/image";

import "./ClientCard.css";

type Props = {
	clientCard: string;
};

const ClientCard = ({ clientCard }: Props) => {
	return (
		<div className="client-card__container">
			<Image
				src="/images/client-card.svg"
				alt="Изображение карты покупателя"
				width={350}
				height={200}
			/>
			<p className="client-card__number">{clientCard}</p>
		</div>
	);
};

export { ClientCard };
