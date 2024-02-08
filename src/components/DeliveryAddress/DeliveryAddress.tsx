import clsx from "clsx";

import { TPersonalDeliveryAddress } from "@/Types/TClient";

import { BlockLikeForm } from "../ui-kit/BlockLikeForm/BlockLikeForm";
import { ChangeDataBtn } from "../ui-kit/ChangeDataBtn/ChangeDataBtn";

import styles from "./DeliveryAddress.module.css";

type Props = {
	deliveryAddress: TPersonalDeliveryAddress;
	consentAddress: boolean;
};

const DeliveryAddress = ({ deliveryAddress, consentAddress }: Props) => {
	const {
		town = "-",
		streetHome = "-",
		apartment = "-",
		floor = "-",
		entrance = "-",
		intercom = "-",
	} = deliveryAddress;

	return (
		<>
			<section className={styles.deliver_address__data}>
				<BlockLikeForm title="Населенный пункт" text={town} />
				<BlockLikeForm title="Улица и номер дома" text={streetHome} />
				<BlockLikeForm title="Номер квартиры" text={apartment} />
				<BlockLikeForm title="Этаж" text={floor} />
				<BlockLikeForm title="Подъезд" text={entrance} />
				<BlockLikeForm title="Домофон" text={intercom} />
				<p
					className={clsx([styles.deliver_address__consentAddress], {
						[styles.address__consentAddress_checked]: consentAddress,
						[styles.address__consentAddress_unchecked]: !consentAddress,
					})}
				>
					Использовать адрес по умолчанию
				</p>
			</section>
			<div className={styles.delivery_address__btn_block}>
				<ChangeDataBtn text="Изменить" color="gray" />
				<ChangeDataBtn text="Удалить" color="gray" />
			</div>
		</>
	);
};

export { DeliveryAddress };
