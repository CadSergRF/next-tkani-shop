import Image from "next/image";

import { TCardFull } from "@/Types/TCard";

import styles from "./CartItem.module.css";
import clsx from "clsx";
import { useCartStore } from "@/lib/store/cart.store";
import { roundedNum } from "@/helpers/func.helpers";

type Props = {
	product: TCardFull;
	index: number;
};

const CartItem = ({ product, index }: Props) => {
	const { _id, mainData, configCard } = product;
	const { articul, name, price, picture } = mainData;
	const { measure } = configCard;

	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const updateQuantity = useCartStore((state) => state.updateQuantity);
	const quantity = useCartStore((state) => state.cart[index].orderQuantity);

	const itemSum = roundedNum(price * quantity, 2).toFixed(2);

	const priceMeasure = measure === "м.п." ? "руб./м." : "руб.";

	return (
		<li className={styles.cart_item__container}>
			{/* Блок изображения */}
			<div>
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
			</div>
			{/* Наименование и артикул */}
			<div className={styles.cart_item__text}>
				<h3 className={styles.cart_item__title}>{name}</h3>
				<p className={styles.cart_item__article}>Артикул: {articul}</p>
			</div>
			{/* Количество товара */}
			<div className={styles.cart_item__input_number__container}>
				<div className={styles.cart_item__input_number}>
					<button
						type="button"
						className={clsx(
							styles.cart_item__input_number__btn,
							styles.cart_item__input_number__btn_minus,
						)}
						onClick={() => updateQuantity(_id, "decrease")}
					/>
					<input
						className={styles.cart_item__input_number__input}
						type="number"
						min={0}
						step={0.1}
						value={quantity}
						readOnly={true}
						// onChange={InputChange}
					/>
					<button
						type="button"
						className={clsx(
							styles.cart_item__input_number__btn,
							styles.cart_item__input_number__btn_plus,
						)}
						onClick={() => updateQuantity(_id, "increase")}
					/>
				</div>
				<p className={styles.cart_item__input_number__text}>{measure}</p>
			</div>
			{/* Блок цена */}
			<div
				className={clsx(
					styles.cart_item__price,
					styles.cart_item__internal_container,
				)}
			>
				{price}
				<span className={styles.cart_item__price_measure}>{priceMeasure}</span>
			</div>
			{/* Блок сумма */}
			<div
				className={clsx(
					styles.cart_item__sum,
					styles.cart_item__internal_container,
				)}
			>
				{itemSum}
				<span className={styles.cart_item__sum_measure}>руб.</span>
			</div>
			{/* Кнопка удалить */}
			<button
				type="button"
				className={styles.cart_item__btn_remove}
				onClick={() => removeFromCart(_id)}
			>
				удалить
			</button>
		</li>
	);
};

export { CartItem };
