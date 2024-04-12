"use client";

import { useSearchCards } from "@/hok/useSearchCards";

import { Cards } from "./Cards/Cards";
import { Filters } from "./Filters/Filters";
import { Pagination } from "./Pagination/Pagination";

import styles from "./Catalog.module.css";
import CatalogSearch from "./CatalogSearch/CatalogSearch";

const Catalog = () => {
	const { cards } = useSearchCards();

	return (
		<section className={styles.wrapper}>
			<CatalogSearch />
			<div className={styles.main}>
				<Filters />
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
