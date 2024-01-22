"use client";

import Image from "next/image";

import "./PcImageCombination.css";

type Props = {
	combination?: string[];
};

const PcImageCombination = ({ combination }: Props) => {
	return (
		<div className="product_card_image_combination">
			{combination?.map((img) => (
				<Image src={img} width={140} height={140} alt="Сочетание тканеи" />
			))}
		</div>
	);
};

export { PcImageCombination };
