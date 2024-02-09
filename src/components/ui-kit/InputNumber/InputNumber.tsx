import { ChangeEvent } from "react";
import clsx from "clsx";

import styles from "./InputNumber.module.css";

type Props = {
	large?: boolean;
	quantity: number;
	InputMinus: () => void;
	InputPlus: () => void;
	InputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputNumber = ({
	large = false,
	quantity = 0,
	InputMinus,
	InputPlus,
	InputChange,
}: Props) => {
	return (
		<div
			className={clsx(styles.input_number, {
				[styles.input_number_large]: large,
			})}
		>
			<button
				type="button"
				className={clsx(
					styles.input_number__btn,
					styles.input_number__btn_minus,
					{
						[styles.input_number__btn_large]: large,
					},
				)}
				onClick={InputMinus}
			/>
			<input
				className={clsx(styles.input_number__input, {
					[styles.input_number__input_large]: large,
				})}
				type="number"
				min={0}
				step={0.1}
				value={quantity}
				onChange={InputChange}
			/>
			<button
				type="button"
				className={clsx(
					styles.input_number__btn,
					styles.input_number__btn_plus,
					{
						[styles.input_number__btn_large]: large,
					},
				)}
				onClick={InputPlus}
			/>
		</div>
	);
};

export { InputNumber };
