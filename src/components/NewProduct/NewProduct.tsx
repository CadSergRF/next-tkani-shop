import React from 'react';

import styles from './NewProduct.module.css';

import { Card } from '../Card/Card';
import { card_one } from '@/lib/FakeData/newProductFake';

const NewProduct = () => {
  return (
    <section className={styles.new_product}>
      <h2 className={styles.new_product__header}>Новое поступление</h2>
      <ul className={styles.new_product__cards}>
        <Card card={card_one} />
        <Card card={card_one} />
        <Card card={card_one} />
      </ul>
    </section>
  );
};

export { NewProduct };
