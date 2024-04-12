import {
	colorNameConstant,
	pictureNameConstant,
	sectionNameConstant,
} from "@/lib/constants/filterCards.constants";
import styles from "./Filters.module.css";
import { useReqSearchStore } from "@/lib/store/reqSearchCards.store";
import clsx from "clsx";
// import { TGetSearchProductResponse } from "@/Types/TResponse";
// import { KeyedMutator } from "swr";

// type TFilterProps = {
// 	mutate: KeyedMutator<TGetSearchProductResponse | undefined>;
// };

// const Filters = ({ mutate }: TFilterProps) => {
const Filters = () => {
	const { reqSearch, changeSection, changePicture, changeColor } =
		useReqSearchStore((state) => state);

	const handleChangeSection = (newSection: string) => {
		changeSection(newSection);
		// mutate();
	};

	const handleChangePictureList = (picture: string) => {
		changePicture(picture);
	};

	const handleChangeColorList = (color: string) => {
		changeColor(color);
	};

	return (
		<nav className={styles.filter}>
			{/* Фильтр секции */}
			<ul className={styles.sectionFilter}>
				{sectionNameConstant.map((item) => (
					<li key={item}>
						<p
							className={clsx(styles.sectionFilter__item, {
								[styles.sectionFilter__item_active]:
									item === reqSearch.sectionName,
							})}
							onClick={() => handleChangeSection(item)}
						>
							{item}
						</p>
					</li>
				))}
			</ul>
			{/* Фильтр рисунок */}
			<div>
				<h2 className={styles.filter__title}>Рисунок</h2>
				<ul className={styles.subFilter}>
					{pictureNameConstant.map((item) => (
						<li
							key={item}
							className={styles.subFilter__item}
						>
							<input
								id={item}
								type="checkbox"
								value={item}
								checked={reqSearch.pictureName.includes(item)}
								onChange={() => handleChangePictureList(item)}
							/>
							<label
								htmlFor={item}
								className={clsx(styles.sectionFilter__item, {
									[styles.sectionFilter__item_active]:
										reqSearch.pictureName.includes(item),
								})}
							>
								{item}
							</label>
						</li>
					))}
				</ul>
			</div>
			{/* Фильтр цвета */}
			<div>
				<h2 className={styles.filter__title}>Цвет</h2>
				<ul className={styles.subFilter}>
					{colorNameConstant.map((item) => (
						<li
							key={item}
							className={styles.subFilter__item}
						>
							<input
								id={item}
								type="checkbox"
								value={item}
								checked={reqSearch.colorName.includes(item)}
								onChange={() => handleChangeColorList(item)}
							/>
							<label
								htmlFor={item}
								className={clsx(styles.sectionFilter__item, {
									[styles.sectionFilter__item_active]:
										reqSearch.colorName.includes(item),
								})}
							>
								{item}
							</label>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export { Filters };
