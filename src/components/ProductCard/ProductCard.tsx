import { TCardFull } from "@/Types/TCard";

import "./ProductCard.css";
import Image from "next/image";
import { PcImagesBlock } from "./PcImagesBlock/PcImagesBlock";
import { AddToCart } from "../Forms/AddToCart/AddToCart";

type Props = {
	card: TCardFull;
};

const ProductCard = ({ card }: Props) => {
	const {
		article,
		title,
		price,
		oldPrice,
		quantity,
		measure,
		image,
		combination,
		description,
		care,
		characteristic,
		seoTags,
	} = card;

	const { width, picture, color, countryOfOrigin, composition, weight } =
		characteristic;

	return (
		<div className="product_card">
			<div className="product_card__left">
				<PcImagesBlock image={image} combination={combination} />
			</div>
			<div className="product_card__text_block">
				<h2 className="product_card__text_title">{title}</h2>
				<p className="product_card__text_primary">{`Артикул: ${article}`}</p>
				<div className="product_card_price_block">
					<p className="product_card__text_price">{price}</p>
					<p className="product_card__text_price_measure">{`руб/${measure}`}</p>
				</div>
				<AddToCart card={card} reverse={true} large={true} />
				<div className="product_card__characteristics_block">
					<p className="product_card__text_primary">{`Ширина: ${width}`}</p>
					<p className="product_card__text_primary">{`Состав: ${composition}`}</p>
					<p className="product_card__text_primary">{`Цвет: ${color}`}</p>
					<p className="product_card__text_primary">{`Плотность: ${weight}`}</p>
					<p className="product_card__text_primary">{`Производитель: ${countryOfOrigin}`}</p>
				</div>
				<div>
					<h3 className="product_card__text_subtitle">Описание товара</h3>
					<p className="product_card__text_description">{description}</p>
				</div>
			</div>
			ProductCard
		</div>
	);
};

export { ProductCard };
