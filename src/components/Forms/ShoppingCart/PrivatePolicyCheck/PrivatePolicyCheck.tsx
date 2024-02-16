import { useFormContext } from "react-hook-form";

import styles from "./PrivatePolicyCheck.module.css";
import Link from "next/link";

const PrivatePolicyCheck = () => {
	const { register } = useFormContext();

	return (
		<section className={styles.privacy_policy}>
			<label className={styles.privacy_policy__label}>
				<input
					{...register("privacyPolicy")}
					type="checkbox"
					value="Acceptance "
					className={styles.privacy_policy__input}
				/>
				<div className={styles.privacy_policy__span}>
					<p>Я согласен с&nbsp;</p>
					<Link href="/personal-data-processing-policy">
						Политикой конфиденциальности и правилами
					</Link>
					<p> продажи товара в интернет-магазине "Твои ткани"</p>
				</div>
			</label>
		</section>
	);
};

export { PrivatePolicyCheck };
