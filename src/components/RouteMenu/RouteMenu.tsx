'use client';

import React from 'react';
import styles from './RouteMenu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RouteMenu = () => {
  const pathname = usePathname();

  console.log('Путь ' + pathname);

  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link href="/" className={styles.menu__item}>
            Главная
          </Link>
        </li>
        <li>
          <Link href="/aboutcompany" className={styles.menu__item}>
            О компании
          </Link>
        </li>
        <li>
          <Link href="/aboutcompany" className={styles.menu__item}>
            Вопрос-Ответ
          </Link>
        </li>
        <li>
          <Link href="/aboutcompany" className={styles.menu__item}>
            Новости
          </Link>
        </li>
        <li>
          <Link href="/aboutcompany" className={styles.menu__item}>
            Контакты
          </Link>
        </li>
        <li>
          <Link href="/aboutcompany" className={styles.menu__item}>
            Оптовикам
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { RouteMenu };
