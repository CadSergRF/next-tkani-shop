"use client";

import { ChangeEvent, useState } from "react";

import "./InputNumber.css";
import clsx from "clsx";

type Props = {
	large?: boolean;
};

const InputNumber = ({ large = false }: Props) => {
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
		<div className={clsx("input_number", { input_number_large: large })}>
			<button
				type="button"
				className={clsx("input_number__btn", "input_number__btn_minus", {
					input_number__btn_large: large,
				})}
				onClick={InputMinus}
			/>
			<input
				className={clsx("input_number__input", {
					input_number__input_large: large,
				})}
				type="number"
				min={0}
				step={0.1}
				value={quantity}
				onChange={InputChange}
			/>
			<button
				type="button"
				className={clsx("input_number__btn", "input_number__btn_plus", {
					input_number__btn_large: large,
				})}
				onClick={InputPlus}
			/>
		</div>
	);
};

export { InputNumber };
