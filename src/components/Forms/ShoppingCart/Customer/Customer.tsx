import { useFormContext } from "react-hook-form";
import styles from "./Customer.module.css";

const Customer = () => {
	const { register } = useFormContext();

	return (
		<section className={styles.customer__container}>
			<span className={styles.customer__empty_block} />
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>ФИО*</span>
				<input
					{...register("customerData.name", { required: true })}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>ФИО*</span>
				<input
					{...register("customerData.email", { required: true })}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>ФИО*</span>
				<input
					{...register("customerData.phone", { required: true })}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			<span className={styles.customer__empty_block} />
		</section>
	);
};

export { Customer };
