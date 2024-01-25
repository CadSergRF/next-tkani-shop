import { OrderLittle } from "./OrderLittle/OrderLittle";

import "./MyOrders.css";

const MyOrders = () => {
	return (
		<article className="all-my-orders">
			<OrderLittle />
			<OrderLittle />
			<OrderLittle />
			<button type="button" className="all-my-orders__pagination">
				Показать еще
			</button>
		</article>
	);
};

export { MyOrders };
