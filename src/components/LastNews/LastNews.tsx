import React from 'react';
import styles from './LastNews.module.css';
import { TNewsLittle } from '@/Types/TNews';
import { NewsPreview } from '../NewsPreview/NewsPreview';

import { news_one } from '@/lib/FakeData/NewsFake';

const LastNews = () => {
  return (
    <section className={styles.last_news}>
      <h2 className={styles.last_news__title}>Новости</h2>
      <div className={styles.last_news__zone}>
        <NewsPreview news={news_one} />
        <NewsPreview news={news_one} />
        <NewsPreview news={news_one} />
      </div>
    </section>
  );
};

export { LastNews };
