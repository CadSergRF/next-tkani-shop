import { WriteSocialBtn } from "@/components/ui-kit/WriteSocialBtn/WriteSocialBtn";

import styles from "./HeaderClientMenu.module.css";
import { HCMItem } from "./HCMItem/HCMItem";
import { PersonalItem } from "./PersonalItem/PersonalItem";

const HeaderClientMenu = () => {
	return (
		<div className={styles.cart_box}>
			<div className={styles.cart_box__icons}>
				<PersonalItem />
				{/* <HCMItem path="/personal-account" /> */}
				<HCMItem path="/favourites" />
				<HCMItem path="/shopping-cart" />
			</div>
			<WriteSocialBtn
				link="https://wa.me/79234906508?text=Добрый%день."
				text="Написать в WhatsApp"
				color="blue"
			/>
		</div>
	);
};

export { HeaderClientMenu };
