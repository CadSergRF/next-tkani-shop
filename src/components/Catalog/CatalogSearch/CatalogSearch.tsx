"use client";

import { useReqSearchStore } from "@/lib/store/reqSearchCards.store";
import searchImg from "../../../lib/images/icon-search.svg";
import styles from "./CatalogSearch.module.css";
import { ChangeEvent, SyntheticEvent, useState } from "react";

const CatalogSearch = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const { changeSearchName } = useReqSearchStore((state) => state);

	const handleChangeSearchValue = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value);
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
		</div>
	);
};

export default CatalogSearch;
