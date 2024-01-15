import React from 'react';
import styles from './SearchMain.module.css';

type Props = {};

const SearchMain = (props: Props) => {
  return (
    <form className={styles.search_main}>
      <img src="./images/search.svg" alt="search icon" className={styles.search_main__icon} />
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
};

export { SearchMain };
