import Image from "next/image";

import { TCardMainInfo } from "@/Types/TCard";

import styles from "./CartItem.module.css";
import clsx from "clsx";
import { useCartStore } from "@/lib/store/cart.store";

type Props = {
	product: TCardMainInfo;
	index: number;
	// quantity: number;
};

// const CartItem = ({ product, quantity }: Props) => {
const CartItem = ({ product, index }: Props) => {
	const { id, article, title, price, measure, image } = product;

	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const updateQuantity = useCartStore((state) => state.updateQuantity);
	const quantity = useCartStore((state) => state.cart[index].orderQuantity);

	const itemSum = Math.round((price * quantity * 100) / 100).toFixed(2);

	const priceMeasure = measure === "м.п." ? "руб./м." : "руб.";

	return (
		<li className={styles.cart_item__container}>
			{/* Блок изображения */}
			<div>
				{image && (
					<Image
						src={image}
						width={80}
						height={80}
						alt="Превью новости"
						style={{ objectFit: "cover" }}
					/>
				)}
			</div>
			{/* Наименование и артикул */}
			<div className={styles.cart_item__text}>
				<h3 className={styles.cart_item__title}>{title}</h3>
				<p className={styles.cart_item__article}>Артикул: {article}</p>
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
						onClick={() => updateQuantity(id, "decrease")}
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
						onClick={() => updateQuantity(id, "increase")}
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
				onClick={() => removeFromCart(id)}
			>
				удалить
			</button>
		</li>
	);
};

export { CartItem };
