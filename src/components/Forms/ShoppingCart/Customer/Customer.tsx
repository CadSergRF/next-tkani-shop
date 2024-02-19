import { useFormContext } from "react-hook-form";
import styles from "./Customer.module.css";
import clsx from "clsx";

const Customer = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	console.log(errors);

	return (
		<section className={styles.customer__container}>
			<span className={styles.customer__empty_block} />
			<h3 className={styles.customer__title}>Получатель</h3>
			{/* ФИО */}
			<label className={styles.customer__label}>
				<div className={styles.customer__item__title_error}>
					<span className={styles.customer__item_span}>ФИО*</span>
					{(errors?.customerData as any)?.name && <p>ошибка</p>}
				</div>
				<input
					{...register("customerData.name", {
						required: true,
						minLength: {
							value: 4,
							message: "Минимальное количество знаков 4",
						},
						maxLength: {
							value: 50,
							message: "Максимальное количество знаков 50",
						},
						pattern: {
							value: /[А-яЁё\ ]+/,
							message: "Укажите ФИО русскими буквами",
						},
					})}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			{/* Номер телефона */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Номер телефона*</span>
				<input
					{...register("customerData.phoneNumber", { required: true })}
					type="number"
					className={styles.customer__item_input}
				/>
			</label>
			{/* e-mail */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>E-mail*</span>
				<input
					{...register("customerData.eMail", { required: true })}
					type="email"
					className={styles.customer__item_input}
				/>
			</label>

			<span
				className={clsx(
					styles.customer__empty_block,
					styles.customer__empty_block__margin,
				)}
			/>

			<h3 className={styles.customer__title}>Адрес доставки</h3>

			{/* Населенный пункт */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Населенный пункт*</span>
				<input
					{...register("customerData.town", { required: true })}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			{/* Улица и номер дома */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Улица и номер дома*</span>
				<input
					{...register("customerData.streetHome", { required: true })}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			{/* Номер квартиры */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Номер квартиры*</span>
				<input
					{...register("customerData.apartment", { required: true })}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			{/* Этаж */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Этаж</span>
				<input
					{...register("customerData.floor")}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			{/* Подъезд */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Подъезд</span>
				<input
					{...register("customerData.entrance")}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			{/* Домофон */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Домофон</span>
				<input
					{...register("customerData.intercom")}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>
			{/* Почтовый индекс */}
			<label className={styles.customer__label}>
				<span className={styles.customer__item_span}>Почтовый индекс</span>
				<input
					{...register("customerData.postIndex")}
					type="text"
					className={styles.customer__item_input}
				/>
			</label>

			<span
				className={clsx(
					styles.customer__empty_block,
					styles.customer__empty_block__margin,
				)}
			/>
		</section>
	);
};

export { Customer };
