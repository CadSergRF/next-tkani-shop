import React from 'react';
import styles from './NewsPreview.module.css';
import { TNewsLittle } from '@/Types/TNews';
import Image from 'next/image';

type Props = {
  news: TNewsLittle;
};

const NewsPreview = (props: Props) => {
  const { image, title, text } = props.news;

  return (
    <article className={styles.news_preview}>
      <Image
        src={image}
        width={280}
        height={100}
        alt="Превью новости"
        style={{ objectFit: 'cover' }}
      />
      <div>
        <h3 className={styles.news_preview_title}>{title}</h3>
        <p className={styles.news_preview_text}>{text}</p>
      </div>
    </article>
  );
};

export { NewsPreview };
