import clsx from "clsx";

import OrderInput from "@/components/ui-kit/OrderInput/OrderInput";

import styles from "./Address.module.css";
import { TDeliveryObject } from "@/Types/TCart";

type TAddressProps = {
	addressDelivery: TDeliveryObject[] | undefined;
};

const Address = ({ addressDelivery }: TAddressProps) => {
	if (!addressDelivery || addressDelivery.length == 0) {
		return null;
	}

	return (
		<section className={styles.address__container}>
			<span className={styles.address__empty_block} />

			<h3 className={styles.address__title}>Адрес доставки</h3>

			{addressDelivery.map((item, index) => (
				<OrderInput
					key={`${item.name} + ${index}`}
					inputTitle={item.title}
					inputName={item.name}
					inputType="text"
				/>
			))}

			<span
				className={clsx(
					styles.address__empty_block,
					styles.address__empty_block__margin,
				)}
			/>
		</section>
	);
};

export { Address };
