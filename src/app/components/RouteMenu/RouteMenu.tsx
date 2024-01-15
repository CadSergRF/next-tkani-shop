import React from 'react';
import styles from './RouteMenu.module.css';

const RouteMenu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>Главная</li>
        <li className={styles.menu__item}>О компании</li>
        <li className={styles.menu__item}>Вопрос-Ответ</li>
        <li className={styles.menu__item}>Новости</li>
        <li className={styles.menu__item}>Контакты</li>
        <li className={styles.menu__item}>Оптовикам</li>
      </ul>
    </nav>
  );
};

export { RouteMenu };
