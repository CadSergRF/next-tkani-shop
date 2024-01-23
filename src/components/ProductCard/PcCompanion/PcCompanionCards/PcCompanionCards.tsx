"use client";

import { TCardLittle } from "@/Types/TCard";

import "./PcCompanionCards.css";
import clsx from "clsx";
import { AddToCart } from "@/components/Forms/AddToCart/AddToCart";

type Props = {
	cards: TCardLittle[];
};

const PcCompanionCards = ({ cards }: Props) => {
	return (
		<ul className="pc_companion_cards_block">
			{cards.map((card) => (
				<li>
					<article className="pc_companion__card">
						<img
							src={card.image}
							alt="Фото ткани"
							className="pc_companion__card_image"
						/>
						<div className="pc_companion__card_info">
							<div className="pc_companion__card_price_zone">
								<p className="pc_companion__card_price">{card.price}</p>
								<p className="pc_companion__card_price_text">{` руб/${card.measure}`}</p>
							</div>
							<h3 className="pc_companion__card_text">{card.title}</h3>
							<p className="pc_companion__card_text">{`Состав: ${card.description}`}</p>
							<p
								className={clsx(
									"pc_companion__card_text",
									"pc_companion__card_text_color",
								)}
							>
								{`Артикул: ${card.article}`}
							</p>
						</div>
						<AddToCart card={card} column={true} reverse={true} />
					</article>
				</li>
			))}
		</ul>
	);
};

export { PcCompanionCards };
