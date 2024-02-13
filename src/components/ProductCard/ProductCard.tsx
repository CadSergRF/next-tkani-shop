import { TCardFull } from "@/Types/TCard";

import "./ProductCard.css";
import clsx from "clsx";

import { PcImagesBlock } from "./PcImagesBlock/PcImagesBlock";
import { AddToCart } from "../Forms/AddToCart/AddToCart";
import { returnRules, sendingRules } from "@/config/constants";
import { WriteSocialBtn } from "../ui-kit/WriteSocialBtn/WriteSocialBtn";

type Props = {
	card: TCardFull;
};

const ProductCard = ({ card }: Props) => {
	const {
		id,
		article,
		title,
		price,
		oldPrice,
		quantity,
		measure,
		image,
		combination,
		description,
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
				<div className="product_card__text_info">
					<h3 className="product_card__text_subtitle">Описание товара:</h3>
					<p className="product_card__text_description">{description}</p>
				</div>
				<div className="product_card__text_info">
					<h3 className="product_card__text_subtitle">
						Сроки отправки и возврат:
					</h3>
					<p className="product_card__text_description">{sendingRules}</p>
					<p className="product_card__text_description mar_top">
						{returnRules}
					</p>
				</div>
				<div className="product_card__text_info">
					<h3 className="product_card__text_subtitle">
						Рекомендации по уходу:
					</h3>
					<p className="product_card__text_description">
						Стирка при температуре до 40 град.
					</p>
					<p className="product_card__text_description">Не отбеливать.</p>
					<p className="product_card__text_description">Усадка ткани - 5%.</p>
					<p className="product_card__text_description mar_top">
						Перед пошивом рекомендуем провести принудительную декатировку ткани.
					</p>
				</div>
				<div className="product_card__text_info">
					<h3 className={clsx("product_card__text_subtitle", "mar_null")}>
						Есть вопросы о товаре?
					</h3>
					<h3 className="product_card__text_subtitle">Напишите нам:</h3>
					<div className="product_card__text_write_social_btn">
						<WriteSocialBtn
							link="https://vk.com/tvoi_tkani"
							text="Написать в Вконтакте"
							color="blue"
						/>
						<WriteSocialBtn
							link="https://wa.me/79234906508?text=Добрый%день."
							text="Написать в WhatsApp"
							color="green"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export { ProductCard };
