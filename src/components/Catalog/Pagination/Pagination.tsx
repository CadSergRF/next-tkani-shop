import clsx from "clsx";

import styles from "./Pagination.module.css";
import { useReqSearchStore } from "@/lib/store/reqSearchCards.store";
import { ChangeEvent } from "react";

type TPaginationPanelProps = {
	countTotalCards: number | undefined;
	countCards: number | undefined;
};

const Pagination = ({ countTotalCards, countCards }: TPaginationPanelProps) => {
	const { reqSearch, changePaginationPage, changePaginationLimit } =
		useReqSearchStore((state) => state);

	// Всего страниц
	const totalPages = countTotalCards
		? Math.ceil(countTotalCards / reqSearch.paginationLimit)
		: 1;
	// Сколько отображено или пролистано
	const countViewCards = countCards
		? (reqSearch.paginationPage - 1) * reqSearch.paginationLimit + countCards
		: 0;
	const handleChangePaginationLimit = (evt: ChangeEvent<HTMLSelectElement>) => {
		changePaginationLimit(evt.target.value);
	};
	const handleChangePaginationPage = (pageNumber: string) => {
		changePaginationPage(pageNumber);
	};

	const handleUpPage = () => {
		handleChangePaginationPage(`${reqSearch.paginationPage + 1}`);
	};

	const handleDownPage = () => {
		handleChangePaginationPage(`${reqSearch.paginationPage - 1}`);
	};
	return (
		<div className={styles.paginationPanel}>
			<label htmlFor="paginationLimit-select">
				Товаров на странице:
				<select
					name="paginationLimit"
					id="paginationLimit-select"
					value={reqSearch.paginationLimit}
					onChange={handleChangePaginationLimit}
				>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
			</label>
			{countTotalCards && (
				<nav className={styles.pages}>
					<button
						type="button"
						onClick={handleDownPage}
						className={clsx(styles.pagesDown, {
							[styles.notVisible]: reqSearch.paginationPage === 1,
						})}
					></button>
					<p>Товаров</p>
					<p>{countViewCards}</p>
					<p>из</p>
					<p>{countTotalCards}</p>
					<button
						type="button"
						onClick={handleUpPage}
						className={clsx(styles.pagesUp, {
							[styles.notVisible]: reqSearch.paginationPage === totalPages,
						})}
					></button>
				</nav>
			)}
		</div>
	);
};

export { Pagination };
