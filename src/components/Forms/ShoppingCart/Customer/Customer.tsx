import clsx from "clsx";

import OrderInput from "@/components/ui-kit/OrderInput/OrderInput";

import styles from "./Customer.module.css";

const Customer = () => {
	return (
		<section className={styles.customer__container}>
			<span className={styles.customer__empty_block} />
			<h3 className={styles.customer__title}>Получатель</h3>
			{/* ФИО */}
			<OrderInput
				inputTitle="ФИО*"
				inputName="customerData.name"
				inputType="text"
			/>
			{/* Номер телефона */}
			<OrderInput
				inputTitle="Номер телефона*"
				inputName="customerData.phoneNumber"
				inputType="number"
			/>
			{/* e-mail */}
			<OrderInput
				inputTitle="E-mail*"
				inputName="customerData.email"
				inputType="text"
			/>

			<span
				className={clsx(
					styles.customer__empty_block,
					styles.customer__empty_block__margin,
				)}
			/>

			<h3 className={styles.customer__title}>Адрес доставки</h3>

			{/* Населенный пункт */}
			<OrderInput
				inputTitle="Населенный пункт*"
				inputName="customerAddress.town"
				inputType="text"
			/>
			{/* Улица и номер дома */}
			<OrderInput
				inputTitle="Улица и номер дома*"
				inputName="customerAddress.streetHome"
				inputType="text"
			/>
			{/* Номер квартиры */}
			<OrderInput
				inputTitle="Номер квартиры*"
				inputName="customerAddress.apartment"
				inputType="text"
			/>
			{/* Этаж */}
			<OrderInput
				inputTitle="Этаж"
				inputName="customerAddress.floor"
				inputType="text"
			/>
			{/* Подъезд */}
			<OrderInput
				inputTitle="Подъезд"
				inputName="customerAddress.entrance"
				inputType="text"
			/>
			{/* Домофон */}
			<OrderInput
				inputTitle="Домофон"
				inputName="customerAddress.intercom"
				inputType="text"
			/>
			{/* Почтовый индекс */}
			<OrderInput
				inputTitle="Почтовый индекс"
				inputName="customerAddress.postIndex"
				inputType="number"
			/>

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
