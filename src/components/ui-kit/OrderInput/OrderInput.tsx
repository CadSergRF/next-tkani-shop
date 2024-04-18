"use client";

import { useFormContext, useFormState } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import styles from "./OrderInput.module.css";

type Props = {
	inputTitle: string;
	inputName: string;
	inputType: string;
};

const OrderInput = ({ inputTitle, inputName, inputType }: Props) => {
	const { register } = useFormContext();
	const { errors } = useFormState();

	return (
		<label className={styles.orderInput__label}>
			<div className={styles.orderInput__item__title_error}>
				<span className={styles.orderInput__item_span}>{inputTitle}</span>
				<ErrorMessage
					errors={errors}
					name={inputName}
					render={({ message }) => (
						<p className={styles.orderInput__error}>{message}</p>
					)}
				/>
			</div>
			<input
				{...register(`${inputName}`)}
				type={inputType}
				className={styles.orderInput__item_input}
				defaultValue=""
			/>
		</label>
	);
};

export default OrderInput;
function register(
	arg0: string,
): import("react").JSX.IntrinsicAttributes &
	import("react").ClassAttributes<HTMLInputElement> &
	import("react").InputHTMLAttributes<HTMLInputElement> {
	throw new Error("Function not implemented.");
}
