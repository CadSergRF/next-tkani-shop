"use client";

import { useState } from "react";
import styles from "./QaItem.module.css";
import clsx from "clsx";

type TQaItemProps = {
	qaItem: {
		question: string;
		answer: string;
	};
};

const QaItem = ({ qaItem }: TQaItemProps) => {
	const [answerShow, setAnswerShow] = useState(false);

	return (
		<article className={styles.wrapper}>
			<div
				className={styles.titleWrapper}
				onClick={() => setAnswerShow(!answerShow)}
			>
				<h2 className={styles.title}>{qaItem.question}</h2>
				<button
					className={clsx(styles.btn, {
						[styles.btn__qaActive]: answerShow,
					})}
					onClick={() => setAnswerShow(!answerShow)}
				></button>
			</div>
			<p
				className={clsx(styles.text, {
					[styles.text__qaActive]: answerShow,
				})}
				onClick={() => setAnswerShow(!answerShow)}
			>
				{qaItem.answer}
			</p>
		</article>
	);
};

export default QaItem;
