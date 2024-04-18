"use client";

import { useReqSearchStore } from "@/lib/store/reqSearchCards.store";
import searchImg from "../../../lib/images/icon-search.svg";
import styles from "./CatalogSearch.module.css";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { initialGetCardsRequest } from "@/lib/constants/cards.constants";

const CatalogSearch = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const { reqSearch, changeSearchName, changeSortName } = useReqSearchStore(
		(state) => state,
	);

	const handleChangeSearchValue = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value);
	};

	const handleChangeSort = (evt: ChangeEvent<HTMLSelectElement>) => {
		console.log(evt.target.value);
		changeSortName(evt.target.value);
	};

	const handleSubmitSearch = (
		evt: SyntheticEvent<HTMLFormElement, SubmitEvent>,
	) => {
		evt.preventDefault();
		setSearchValue("");
		changeSearchName(searchValue);
	};

	return (
		<div className={styles.container}>
			<form
				className={styles.form}
				onSubmit={handleSubmitSearch}
			>
				<input
					id="header-search"
					type="search"
					value={searchValue}
					placeholder="Поиск"
					autoComplete="off"
					className={styles.input}
					onChange={handleChangeSearchValue}
				/>
				<button className={styles.btn}></button>
			</form>
			<select
				className={styles.select}
				// value={reqSearch.sortName}
				onChange={handleChangeSort}
			>
				<option value=""> </option>
				<option value="priceUp">Цена: по возрастанию</option>
				<option value="priceDown">Цена: по убыванию</option>
			</select>
		</div>
	);
};

export default CatalogSearch;
