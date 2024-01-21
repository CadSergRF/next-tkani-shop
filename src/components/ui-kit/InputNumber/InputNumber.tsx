"use client";

import { ChangeEvent, useState } from "react";

import styles from "./InputNumber.module.css";

const InputNumber = () => {
	const [quantity, setQuantity] = useState<number>(0);

	const InputMinus = () => {
		const toValue = Math.round((quantity - 0.1) * 10) / 10;
		setQuantity(toValue);
	};

	const InputPlus = () => {
		const toValue = Math.round((quantity + 0.1) * 10) / 10;
		setQuantity(toValue);
	};

	const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const toValue = parseFloat(value).toFixed(2);
		setQuantity(parseFloat(toValue));
	};

	return (
		<div className={styles.input_number}>
			<button
				type="button"
				className={styles.input_number_btn}
				onClick={InputMinus}
			>
				-
			</button>
			<input
				className={styles.input_number_input}
				type="number"
				min={0}
				step={0.1}
				value={quantity}
				onChange={InputChange}
			/>
			<button
				type="button"
				className={styles.input_number_btn}
				onClick={InputPlus}
			>
				+
			</button>
		</div>
	);
};

export { InputNumber };
