import { TCardMainInfo } from "@/Types/TCard";

import styles from "./CartItem.module.css";
import Image from "next/image";

type Props = {
	product: TCardMainInfo;
	quantity: number;
};

const CartItem = ({ product, quantity }: Props) => {
	const { id, article, title, price, measure, image, description } = product;

	const itemSum = price * quantity;

	return (
		<li>
			<div>
				{image && (
					<Image
						src={image}
						width={280}
						height={100}
						alt="Превью новости"
						style={{ objectFit: "cover" }}
					/>
				)}
			</div>
			<div>
				<h3>{title}</h3>
				<p>{article}</p>
			</div>
			<div>{price}</div>
			<div>{itemSum}</div>
			<button type="button">удалить</button>
		</li>
	);
};

export { CartItem };
