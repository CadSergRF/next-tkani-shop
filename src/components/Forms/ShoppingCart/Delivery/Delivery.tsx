import { useFormContext } from "react-hook-form";
import { ChangeEvent, useState } from "react";

import { DeliveryMethod } from "@/Types/TCart";

import styles from "./Delivery.module.css";

const Delivery = () => {
	const { register } = useFormContext();

	// state для опции "Другой вариант"
	const [checkedOtherVariant, setCheckedOtherVariant] =
		useState<boolean>(false);
	const [otherVariant, setOtherVariant] = useState<string>("");

	const handleChangeOtherVariant = (evt: ChangeEvent<HTMLInputElement>) => {
		const enterVariant = evt.target.value;
		enterVariant?.length > 0 && setCheckedOtherVariant(true);
		setOtherVariant(enterVariant);
	};

	const handleCheckedOtherVariant = () => {
		setCheckedOtherVariant(true);
	};

	const handleResetOtherVariant = () => {
		setCheckedOtherVariant(false);
		setOtherVariant("");
	};

	return (
		<div className={styles.delivery}>
			{DeliveryMethod &&
				DeliveryMethod.map((item, index) => (
					<label key={item + index} className={styles.delivery__label}>
						<input
							{...register("deliveryType", { required: true })}
							type="radio"
							value={item}
							defaultChecked={index === 0}
							onClick={handleResetOtherVariant}
							className={styles.delivery__item_input}
						/>
						<span className={styles.delivery__item_span}>{item}</span>
					</label>
				))}
			{/* radio-input "Другие варианты" с дополнительным input */}
			<label className={styles.delivery__item_other}>
				<input
					{...register("deliveryType", { required: true })}
					type="radio"
					value={`Другой вариант ${otherVariant}`}
					// value="другой вариант"
					className={styles.delivery__item_input}
					checked={checkedOtherVariant}
				/>
				<span className={styles.delivery__item_span}>Другой вариант</span>
				<input
					type="text"
					value={otherVariant}
					onClick={handleCheckedOtherVariant}
					onChange={handleChangeOtherVariant}
					className={styles.delivery__item_other__input}
				/>
			</label>
		</div>
	);
};

export { Delivery };
