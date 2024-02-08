"use client";

import React, { FormEvent } from "react";
import clsx from "clsx";

import { TCardFull, TCardLittle } from "@/Types/TCard";

import { InputNumber } from "@/components/ui-kit/InputNumber/InputNumber";

import styles from "./AddToCart.module.css";

type Props = {
	card: TCardLittle | TCardFull;
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
	const { measure } = card;

	const handleAddToCart = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
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
				<InputNumber large={large} />
				<p className={styles.add_to_cart_text}>{measure}</p>
			</div>
		</form>
	);
};

export { AddToCart };
