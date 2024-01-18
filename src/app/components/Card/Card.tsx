import React from 'react';
import Image from 'next/image';

import styles from './Card.module.css';

import { TCardLittle } from '@/app/Types/TCard';
import { InputNumber } from '../InputNumber/InputNumber';

const Card = (card: TCardLittle) => {
  const { image, article, title, description, price, measure } = card;

  return (
    <li>
      <article className={styles.card}>
        <img src={image} alt="Фото ткани" className={styles.card_image} />
        <div className={styles.card_info}>
          <div className={styles.card_description}>
            <div className={styles.card_price_zone}>
              <p className={styles.card_price}>{price}</p>
              <p className={styles.card_price_text}>{` руб/${measure}`}</p>
            </div>
            <h3 className={styles.card_text}>{title}</h3>
            <p className={styles.card_text}>{description}</p>
            <p className={styles.card_text}>{article}</p>
          </div>
          <Image src="./images/icon-like.svg" alt="Избранное" width={27} height={27} />
        </div>
        <div className={styles.card_buy_zone}>
          <button className={styles.card_add_btn}>В корзину</button>
          <div className={styles.card_buy_zone_choose}>
            <InputNumber />
            <p className={styles.card_buy_zone_text}>{measure}</p>
          </div>
        </div>
      </article>
    </li>
  );
};

export { Card };
