import { TChosenDeliveryMethod } from "@/Types/TCart";

import {
	addressCourierHomeOffice,
	addressOffice,
	addressPostAutomat,
	addressPostOffice,
} from "@/lib/constants/Cart.constants";

export const renderAddress = (chosenMethod: string): TChosenDeliveryMethod => {
	// Принимаем выбранный метод доставки
	// возвращаем false если выбран Самовывоз или Другой способ
	// или возвращаем нужный массив объектов адреса
	const firstWord = chosenMethod.split(" ")[0];
	if (firstWord == "Курьерская") {
		return { name: "courierHomeOffice", address: addressCourierHomeOffice };
	} else if (["Транспортная", "СДЭК"].includes(firstWord)) {
		return { name: "transportCompany", address: addressOffice };
	} else if (chosenMethod == "Почта России (посылка в отделение)") {
		return { name: "addressPostOffice", address: addressPostOffice };
	} else if (chosenMethod == "Почта России (почтомат)") {
		return { name: "addressPostAutomat", address: addressPostAutomat };
	} else {
		return { name: "notAddress", address: [] };
	}
};
