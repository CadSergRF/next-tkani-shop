import { TCardFull } from "@/Types/TCard";

import { Card } from "@/components/Card/Card";

import styles from "./Cards.module.css";

type TCardsProps = {
	cards: TCardFull[] | undefined;
};

const Cards = ({ cards }: TCardsProps) => {
	return (
		<section className={styles.cardList}>
			{cards &&
				cards.map((item) => (
					<Card
						key={item._id}
						card={item}
					/>
				))}
		</section>
	);
};

export { Cards };
