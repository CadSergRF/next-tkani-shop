import { card_one } from "@/lib/FakeData/FakeProduct/newProductFake";

import { Card } from "../Card/Card";

import styles from "./NewProduct.module.css";
import { card_rek } from "@/lib/FakeData/FakeProduct/newProductsFake";

const NewProduct = () => (
	<section className={styles.new_product}>
		<h2 className={styles.new_product__header}>Новое поступление</h2>
		<ul className={styles.new_product__cards}>
			{card_rek &&
				card_rek?.length > 0 &&
				card_rek.map((item) => <Card key={item.id} card={item} />)}
			{/* // <Card card={card_one} />
			// <Card card={card_one} />
			// <Card card={card_one} /> */}
		</ul>
	</section>
);

export { NewProduct };
