import React from "react";
import Image from "next/image";

import { TNewsLittle } from "@/Types/TNews";

import styles from "./NewsPreview.module.css";

type Props = {
	news: TNewsLittle;
};

const NewsPreview = (props: Props) => {
	const { news } = props;
	const { image, title, text } = news;

	return (
		<article className={styles.news_preview}>
			<Image
				src={image}
				width={280}
				height={100}
				alt="Превью новости"
				style={{ objectFit: "cover" }}
			/>
			<div>
				<h3 className={styles.news_preview_title}>{title}</h3>
				<p className={styles.news_preview_text}>{text}</p>
			</div>
		</article>
	);
};

export { NewsPreview };
