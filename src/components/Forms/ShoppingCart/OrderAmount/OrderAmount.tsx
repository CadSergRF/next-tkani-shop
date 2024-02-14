import { useCartStore } from "@/lib/store/cart.store";

import { roundedNum } from "@/helpers/func.helpers";

import styles from "./OrderAmount.module.css";

const OrderAmount = () => {
	// Собираем сумму заказа из стора
	const orderReduce = useCartStore((state) => {
		return state.cart.reduce(
			(acc, item) => acc + item.cartProduct.price * item.orderQuantity,
			0,
		);
	});
	// округляем, чтобы избежать непонятных округлений js-а
	const orderAmount = roundedNum(orderReduce, 2);
	// целая часть
	const orderAmountRub = Math.trunc(orderAmount);
	// Дробная часть
	const orderAmountKop = (orderAmount - orderAmountRub) * 100;
	const orderAmountKopToScreen =
		orderAmountKop === 0 ? "00" : orderAmountKop.toFixed(0);

	return (
		<div className={styles.order_amount}>
			<span className={styles.order_amount__title}>Сумма заказа: </span>
			<span className={styles.order_amount__price}>
				{orderAmountRub.toFixed(0)}
			</span>
			<span className={styles.order_amount__text}>руб. </span>
			<span className={styles.order_amount__price}>
				{orderAmountKopToScreen}
			</span>
			<span className={styles.order_amount__text}>коп.</span>
		</div>
	);
};

export { OrderAmount };
