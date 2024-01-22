import Image from "next/image";
import { emptyImage } from "@/config/constants";

import "./PcImagesBlock.css";
import { PcImageCombination } from "./PcImageCombination/PcImageCombination";

type Props = {
	image?: string;
	combination?: string[];
};

const PcImagesBlock = ({ image, combination }: Props) => {
	const showImage = image ? image : emptyImage;

	return (
		<div className="product_card_image_block">
			<Image
				src={showImage}
				width={450}
				height={450}
				alt="Изображение товара"
				style={{ objectFit: "contain" }}
			/>
			<PcImageCombination combination={combination} />
		</div>
	);
};

export { PcImagesBlock };
