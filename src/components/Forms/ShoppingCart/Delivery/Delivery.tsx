import { useFormContext } from "react-hook-form";
import { ChangeEvent, useState } from "react";

import { DeliveryMethod } from "@/Types/TCart";

import styles from "./Delivery.module.css";

const Delivery = () => {
	const { register, setValue } = useFormContext();

	// state для опции "Другой вариант"
	const [checkedOtherVariant, setCheckedOtherVariant] =
		useState<boolean>(false);
	const [otherVariant, setOtherVariant] = useState<string>("");

	const handleChangeOtherVariant = (evt: ChangeEvent<HTMLInputElement>) => {
		const enterVariant = evt.target.value;
		setOtherVariant(enterVariant);

		setValue("deliveryType", `Другой вариант ${enterVariant}`);
	};

	const handleCheckedOtherVariant = () => {
		setCheckedOtherVariant(true);
	};

	// Сброс данных Другого варианта
	const handleResetOtherVariant = () => {
		setCheckedOtherVariant(false);
		setOtherVariant("");
	};

	return (
		<div className={styles.delivery}>
			<h2 className={styles.delivery_title}>Способ доставки</h2>
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
