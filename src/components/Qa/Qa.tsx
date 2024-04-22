import { questAnswer } from "@/config/qa.constants";
import QaItem from "./QaItem/QaItem";

import styles from "./Qa.module.css";

const Qa = () => {
	return (
		<section className={styles.wrapper}>
			{questAnswer.map((item, index) => (
				<QaItem
					key={index}
					qaItem={item}
				/>
			))}
		</section>
	);
};

export { Qa };
