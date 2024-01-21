import React from "react";

import { news_one } from "@/lib/FakeData/NewsFake";

import { NewsPreview } from "../NewsPreview/NewsPreview";

import styles from "./LastNews.module.css";

const LastNews = () => (
	<section className={styles.last_news}>
		<h2 className={styles.last_news__title}>Новости</h2>
		<div className={styles.last_news__zone}>
			<NewsPreview news={news_one} />
			<NewsPreview news={news_one} />
			<NewsPreview news={news_one} />
		</div>
	</section>
);

export { LastNews };
