export type TCardMainInfo = {
	id: string; // id товара в базе
	article: string; // Артикул
	title: string; // Наименование
	price: number; // Цена за единицу
	oldPrice?: number; // "Старая цена" - для акций
	quantity?: number; // Количество, остаток
	measure: string; // Единица измерения
	image?: string; // Изображение товара
	combination?: string[]; // Дополнительные фото товара
	description?: string; // Описание товара
};

type TCharacteristic = {
	width?: number; // Ширина
	picture?: string; // Рисунок
	color?: string; // Основной цвет
	countryOfOrigin?: string; // Страна производитель
	composition?: string; // Состав ткани
	weight?: string; // Плотность или вес за единицу измерения
};

type TSEO = {
	seoHeader?: string; // Заголовок
	seoDescription?: string; // Описание
	seoKeyWords?: string[]; // Ключевые слова
};

type TCardAdditionalInfo = {
	recommended?: TCardMainInfo[]; // Рекомендованные товары или сочетания
	characteristic: TCharacteristic;
	seoTags: TSEO;
};

export type TCardFull = TCardMainInfo & TCardAdditionalInfo;
