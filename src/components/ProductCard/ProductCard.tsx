import { TCardFull } from "@/Types/TCard";

import "./ProductCard.css";
import Image from "next/image";
import { PcImagesBlock } from "./PcImagesBlock/PcImagesBlock";

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
			<PcImagesBlock image={image} combination={combination} />
			<div className="product_card_text_block">
				<h2 className="product_card_text_title"></h2>
			</div>
			ProductCard
		</div>
	);
};

export { ProductCard };
