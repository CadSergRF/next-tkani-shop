import Image from "next/image";

import { ChangeDataBtn } from "@/components/ui-kit/ChangeDataBtn/ChangeDataBtn";

import "./OrderLittle.css";

const OrderLittle = () => {
	return (
		<div className="order-little">
			<div className="order-little__header">
				<p className="order-little__date">
					Заказ от 19 января 2023г. на сумму 12583 руб. 00 коп.
				</p>
				<p className="order-little__status">Выполнен</p>
			</div>
			<div className="order-little__about">
				<div className="order-little__btn-block">
					<ChangeDataBtn text="Подробнее о заказе" color="gray" size="little" />
					<ChangeDataBtn text="Повторить заказ" color="blue" size="little" />
				</div>
				<div className="order-little__preview">
					<Image
						src="/images/fake/k-ak-2.jpg"
						width={70}
						height={70}
						alt="Превью товара"
					/>
					<Image
						src="/images/fake/k-zc-12.jpg"
						width={70}
						height={70}
						alt="Превью товара"
					/>
					<Image
						src="/images/fake/k-ak-2.jpg"
						width={70}
						height={70}
						alt="Превью товара"
					/>
					<Image
						src="/images/fake/k-zc-12.jpg"
						width={70}
						height={70}
						alt="Превью товара"
					/>
					<Image
						src="/images/fake/k-ak-2.jpg"
						width={70}
						height={70}
						alt="Превью товара"
					/>
				</div>
			</div>
		</div>
	);
};

export { OrderLittle };
