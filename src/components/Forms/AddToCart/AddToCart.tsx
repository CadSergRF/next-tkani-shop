"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import clsx from "clsx";

import { TCardFull, TCardMainInfo } from "@/Types/TCard";

import { useCartStore } from "@/lib/store/cart.store";
import { InputNumber } from "@/components/ui-kit/InputNumber/InputNumber";

import styles from "./AddToCart.module.css";
import { roundedNum } from "@/helpers/func.helpers";
import { REGEX_QUANTITY } from "@/lib/constants/constants";

type Props = {
	card: TCardMainInfo;
	displayItem?: boolean;
	column?: boolean;
	reverse?: boolean;
	large?: boolean;
};

const AddToCart = ({
	card,
	displayItem = true,
	column = false,
	reverse = false,
	large = false,
}: Props) => {
	const { measure } = card; // Отображение единицы измерения
	const [quantity, setQuantity] = useState<number>(0); // Количество для заказа
	const addToCart = useCartStore((state) => state.addToCart);

	const InputMinus = () => {
		const toValue = roundedNum(quantity - 0.1, 1);
		toValue > 0 ? setQuantity(toValue) : setQuantity(0);
	};

	const InputPlus = () => {
		const toValue = roundedNum(quantity + 0.1, 1);
		setQuantity(toValue);
	};

	const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const toValue = roundedNum(parseFloat(value), 1);
		if (toValue < 100 && value.match(REGEX_QUANTITY)) {
			setQuantity(toValue);
		} else {
			console.log("null");
			setQuantity(0);
		}
	};

	const handleAddToCart = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		addToCart({ cartProduct: card, orderQuantity: quantity });
		setQuantity(0);
	};

	return (
		<form
			className={clsx(styles.add_to_cart, {
				[styles.add_to_cart__row_reverse]: !column && reverse,
				[styles.add_to_cart__column]: column && !reverse,
				[styles.add_to_cart__column_reverse]: column && reverse,
			})}
			onSubmit={handleAddToCart}
		>
			<button
				type="submit"
				className={clsx(styles.add_to_cart__btn, {
					[styles.add_to_card__btn_large]: large,
				})}
			>
				В корзину
			</button>
			<div className={styles.add_to_cart_choose}>
				<InputNumber
					large={large}
					quantity={quantity}
					InputMinus={InputMinus}
					InputPlus={InputPlus}
					InputChange={InputChange}
				/>
				<p className={styles.add_to_cart_text}>{measure}</p>
			</div>
		</form>
	);
};

export { AddToCart };
