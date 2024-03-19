export type TPersonalData = {
	id: string;
	fullName: string;
	phoneNumber: string;
	birthday?: string;
	eMail: string;
	clientCard?: string;
};

export type TPersonalDeliveryAddress = {
	postIndex?: string;
	town?: string;
	streetHome?: string;
	apartment?: string;
	floor?: string;
	entrance?: string;
	intercom?: string;
};

export type TPersonalFullData = TPersonalData | TPersonalDeliveryAddress;

export type TUserFromServer = {
	id: string;
	name: string;
	role: string;
	eMail: string;
	phoneNumber?: string;
	birthday?: string;
	clientCard?: string;
	address: TPersonalDeliveryAddress;
};
