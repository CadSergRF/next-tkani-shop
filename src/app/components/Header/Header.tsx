import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { RouteMenu } from '../RouteMenu/RouteMenu';
import { SearchMain } from '../SearchMain/SearchMain';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <div className={styles.menu__container}>
          <RouteMenu />
          <div className={styles.menu__phone}>+7-923-490-6508</div>
        </div>
      </div>
      <div className={styles.header__central}>
        <img src="./images/logo.svg" alt="search icon" className={styles.header__central_logo} />
        <SearchMain />
        <div className={styles.cart_box}>
          <div className={styles.cart_box__icons}>
            <img src="./images/heart.svg" alt="search icon" className={styles.cart_box__icon} />
            <img src="./images/heart.svg" alt="search icon" className={styles.cart_box__icon} />
            <img src="./images/heart.svg" alt="search icon" className={styles.cart_box__icon} />
          </div>
          <button className={styles.cart_box__btn}>Написать в Whats App</button>
        </div>
      </div>
    </header>
  );
};

export { Header };
