import clsx from "clsx";

import { TPersonalDeliveryAddress } from "@/Types/TClient";

import { BlockLikeForm } from "../ui-kit/BlockLikeForm/BlockLikeForm";
import { ChangeDataBtn } from "../ui-kit/ChangeDataBtn/ChangeDataBtn";

import "./DeliveryAddress.css";

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
			<article className="deliver-address_data">
				<BlockLikeForm title="Населенный пункт" text={town} />
				<BlockLikeForm title="Улица и номер дома" text={streetHome} />
				<BlockLikeForm title="Номер квартиры" text={apartment} />
				<BlockLikeForm title="Этаж" text={floor} />
				<BlockLikeForm title="Подъезд" text={entrance} />
				<BlockLikeForm title="Домофон" text={intercom} />
				<p
					className={clsx("deliver-address__consentAddress", {
						address__consentAddress_checked: consentAddress,
						address__consentAddress_unchecked: !consentAddress,
					})}
				>
					Использовать адрес по умолчанию
				</p>
			</article>
			<div className="delivery-address__btn-block">
				<ChangeDataBtn text="Изменить" />
				<ChangeDataBtn text="Удалить" />
			</div>
		</>
	);
};

export { DeliveryAddress };
