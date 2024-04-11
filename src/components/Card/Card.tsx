import clsx from "clsx";

import { TCardFull } from "@/Types/TCard";

import { AddToCart } from "../Forms/AddToCart/AddToCart";

import styles from "./Card.module.css";

type TCardProps = {
	card: TCardFull;
};

const Card = ({ card }: TCardProps) => {
	const { mainData, configCard, characteristic } = card;
	const { articul, name, price, picture } = mainData;
	const { measure } = configCard;
	const { composition } = characteristic;
	const defMeasure = measure ? measure : "м.п.";

	return (
		<article className={styles.card}>
			{picture ? (
				<img
					src={picture}
					alt="Фото ткани"
					className={styles.card_image}
				/>
			) : (
				<div
					className={clsx(styles.card_image, styles.card_image_noImage)}
				></div>
			)}
			<div className={styles.card_info}>
				<div className={styles.card_description}>
					<div className={styles.card_price_zone}>
						<p className={styles.card_price}>{price}</p>
						<p className={styles.card_price_text}>{` руб/${defMeasure}`}</p>
					</div>
					<h3 className={styles.card_text}>{name}</h3>
					<p className={styles.card_text}>{`Состав: ${composition}`}</p>
					<p className={clsx(styles.card_text, styles.card_text_color)}>
						{`Артикул: ${articul}`}
					</p>
				</div>
				<button
					type="button"
					className={styles.card_like}
				/>
			</div>
			<AddToCart card={card} />
		</article>
	);
};

export { Card };
