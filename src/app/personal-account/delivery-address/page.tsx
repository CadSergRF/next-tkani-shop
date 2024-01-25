import { Metadata } from "next";

import { DeliveryAddress } from "@/components/DeliveryAddress/DeliveryAddress";

import { fakeUserDeliveryAddress } from "@/lib/FakeData/FakeUser";

import "./DeliveryAddress.css";

export const metadata: Metadata = {
	title:
		"Адрес доставки | Личный кабинет | Твои-Ткани - интернет-магазин тканей",
};

export default function DeliveryAddressPage() {
	return (
		<section className="delivery-address">
			<h2 className="delivery-address__title">Адрес доставки</h2>
			<DeliveryAddress
				deliveryAddress={fakeUserDeliveryAddress}
				consentAddress={true}
			/>
		</section>
	);
}
