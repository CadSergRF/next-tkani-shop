"use client";

import { useSearchCards } from "@/hok/useSearchCards";

import { Cards } from "./Cards/Cards";
import { Filters } from "./Filters/Filters";
import { Pagination } from "./Pagination/Pagination";

import styles from "./Catalog.module.css";

const Catalog = () => {
	const { cards, mutate } = useSearchCards();

	return (
		<section className={styles.wrapper}>
			<div className={styles.search}>Поиск</div>
			<div className={styles.main}>
				<Filters mutate={mutate} />
				<Cards cards={cards?.cards} />
			</div>
				<Pagination
					countTotalCards={cards?.countTotalCards}
					countCards={cards?.cards.length}
				/>
		</section>
	);
};

export { Catalog };
