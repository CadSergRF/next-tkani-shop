/* eslint-disable jsx-a11y/control-has-associated-label */
import clsx from "clsx";

import { TCardLittle } from "@/Types/TCard";

import { AddToCart } from "../Forms/AddToCart/AddToCart";

import styles from "./Card.module.css";

type Props = {
	card: TCardLittle;
};

const Card = (props: Props) => {
	const { card } = props;
	const { image, article, title, description, price, measure } = card;

	return (
		<li>
			<article className={styles.card}>
				<img src={image} alt="Фото ткани" className={styles.card_image} />
				<div className={styles.card_info}>
					<div className={styles.card_description}>
						<div className={styles.card_price_zone}>
							<p className={styles.card_price}>{price}</p>
							<p className={styles.card_price_text}>{` руб/${measure}`}</p>
						</div>
						<h3 className={styles.card_text}>{title}</h3>
						<p className={styles.card_text}>{`Состав: ${description}`}</p>
						<p className={clsx(styles.card_text, styles.card_text_color)}>
							{`Артикул: ${article}`}
						</p>
					</div>
					<button type="button" className={styles.card_like} />
				</div>
				<AddToCart card={card} />
			</article>
		</li>
	);
};

export { Card };
