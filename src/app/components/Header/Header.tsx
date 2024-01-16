import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { RouteMenu } from '../RouteMenu/RouteMenu';
import { SearchMain } from '../SearchMain/SearchMain';
import { SubMenu } from '../SubMenu/SubMenu';

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
        <Image
          src="./images/icon-logo.svg"
          width={300}
          height={100}
          alt="Логотип компании Твои ткани"
        />
        <SearchMain />
        <div className={styles.cart_box}>
          <div className={styles.cart_box__icons}>
            <Image src="./images/icon-personal.svg" alt="Личный кабинет" width={27} height={27} />
            <Image src="./images/icon-like.svg" alt="Избранное" width={27} height={27} />
            <Image src="./images/icon-cart.svg" alt="Корзина товаров" width={27} height={27} />
          </div>
          <button className={styles.cart_box__btn}>Написать в Whats App</button>
        </div>
      </div>
      <SubMenu />
    </header>
  );
};

export { Header };
