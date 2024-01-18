'use client';

import React, { useState } from 'react';

import styles from './InputNumber.module.css';

type Props = {};

const InputNumber = (props: Props) => {
  const [value, setValue] = useState<number>(0);

  const InputMinus = () => {
    setValue(value - 0.1);
  };

  const InputPlus = () => {
    setValue(value + 0.1);
  };

  return (
    <div className={styles.input_number}>
      <button className={styles.input_number_btn} onClick={InputMinus}>
        -
      </button>
      <input
        className={styles.input_number_input}
        type="number"
        min={0}
        step={0.1}
        value={value}
        // onChange={InputChange}
      />
      <button className={styles.input_number_btn} onClick={InputPlus}>
        +
      </button>
    </div>
  );
};

export { InputNumber };
