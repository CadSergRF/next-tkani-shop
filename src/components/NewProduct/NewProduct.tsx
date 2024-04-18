import { Card } from "../Card/Card";

import { card_rek } from "@/lib/FakeData/FakeProduct/newProductsFake";

import styles from "./NewProduct.module.css";

const NewProduct = () => (
	<section className={styles.new_product}>
		<h2 className={styles.new_product__header}>Новое поступление</h2>
		<ul className={styles.new_product__cards}>
			{card_rek &&
				card_rek?.length > 0 &&
				card_rek.map((item) => (
					<li key={item._id}>
						<Card card={item} />
					</li>
				))}
		</ul>
	</section>
);

export { NewProduct };
