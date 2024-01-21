import React from "react";

import { card_one } from "@/lib/FakeData/newProductFake";

import { Card } from "../Card/Card";

import styles from "./NewProduct.module.css";

const NewProduct = () => (
	<section className={styles.new_product}>
		<h2 className={styles.new_product__header}>Новое поступление</h2>
		<ul className={styles.new_product__cards}>
			<Card card={card_one} />
			<Card card={card_one} />
			<Card card={card_one} />
		</ul>
	</section>
);

export { NewProduct };
