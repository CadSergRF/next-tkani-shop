import { TPersonalData, TPersonalDeliveryAddress } from "@/Types/TClient";

export const fakeUser: TPersonalData = {
	fullName: "Никитина Евгения Юрьевна",
	phoneNumber: "+7-999-999-9999",
	birthday: "31 декабря 3112",
	eMail: "some@email.com",
	clientCard: "1234",
};

export const fakeUserDeliveryAddress: TPersonalDeliveryAddress = {
	town: "Кемерово",
	streetHome: "пр. Октябрьский, 28",
	apartment: "814",
	floor: "8",
	entrance: "1",
	intercom: "814",
};
