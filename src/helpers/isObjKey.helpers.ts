export function isObjKey<T extends object>(key: any, obj: T): key is keyof T {
	return key in obj;
}
