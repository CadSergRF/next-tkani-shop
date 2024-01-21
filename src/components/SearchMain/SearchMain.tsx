import Image from "next/image";

import styles from "./SearchMain.module.css";

const SearchMain = () => (
	<form className={styles.search_main}>
		<Image src="./images/icon-search.svg" alt="Поиск" width={20} height={20} />
		<input
			id="header-search"
			type="search"
			placeholder="Поиск"
			autoComplete="off"
			className={styles.search_main__input}
		/>
		<button type="submit" title="Search" className={styles.search_main__btn}>
			Найти
		</button>
	</form>
);

export { SearchMain };
