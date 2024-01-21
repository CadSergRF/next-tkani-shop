"use client";

import React, { FormEvent } from "react";

import { TCardLittle } from "@/Types/TCard";

import { InputNumber } from "@/components/ui-kit/InputNumber/InputNumber";

import styles from "./AddToCart.module.css";

type Props = {
	card: TCardLittle;
};

const AddToCart = (props: Props) => {
	const { card } = props;
	const { measure } = card;

	const handleAddToCart = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
	};

	return (
		<form className={styles.add_to_cart} onSubmit={handleAddToCart}>
			<button type="submit" className={styles.add_to_cart_btn}>
				В корзину
			</button>
			<div className={styles.add_to_cart_choose}>
				<InputNumber />
				<p className={styles.add_to_cart_text}>{measure}</p>
			</div>
		</form>
	);
};

export { AddToCart };
