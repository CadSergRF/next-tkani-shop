import React from 'react';
import clsx from 'clsx';

import styles from './SubMenu.module.css';

const SubMenu = () => {
  return (
    <nav className={styles.header_submenu}>
      <ul className={styles.sub_menu}>
        <li
          className={clsx(
            styles.sub_menu__item,
            styles.sub_menu__item_btn,
            styles.sub_menu__item_btn_blue,
          )}>
          Каталог
        </li>
        <li
          className={clsx(
            styles.sub_menu__item,
            styles.sub_menu__item_btn,
            styles.sub_menu__item_btn_pink,
          )}>
          Акции
        </li>
        <li className={styles.sub_menu__item}>Оформление заказа</li>
        <li className={styles.sub_menu__item}>Подарочные сертификаты</li>
        <li className={styles.sub_menu__item}>Доставка и оплата</li>
      </ul>
    </nav>
  );
};

export { SubMenu };
