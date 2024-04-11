export type TCardMainData = {
	articul: string; // Артикул
	name: string; // Наименование
	price: number; // Цена за единицу
	oldPrice?: number; // "Старая цена" - для акций
	quantity?: number; // Количество, остаток
	picture?: string; // Изображение товара
	description?: string; // Описание товара
};

type TCardCharacteristic = {
	width?: number; // Ширина
	picture?: string; // Рисунок
	color?: string; // Основной цвет
	countryOfOrigin?: string; // Страна производитель
	composition?: string; // Состав ткани
	weight?: string; // Плотность или вес за единицу измерения
};

type TCardSEO = {
	header?: string; // Заголовок
	description?: string; // Описание
	keyWords?: string[]; // Ключевые слова
};

type TCardConfig = {
	visible: boolean;
	promo?: boolean;
	section?: string;
	measure?: string;
};

type TCard = {
	mainData: TCardMainData;
	characteristic: TCardCharacteristic;
	seoTags: TCardSEO;
	configCard: TCardConfig;
};

export type TCardId = {
	_id: string;
};

export type TCardFull = TCard & TCardId;
