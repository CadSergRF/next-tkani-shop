export type TPersonalData = {
	fullName: string;
	phoneNumber: string;
	birthday?: string;
	eMail: string;
	clientCard?: string;
};

export type TPersonalDeliveryAddress = {
	town?: string;
	streetHome?: string;
	apartment?: string;
	floor?: string;
	entrance?: string;
	intercom?: string;
};
