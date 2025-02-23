export const roundedNum = (item: number, decimalPlaces: number): number => {
	const roundNum =
		Math.round((item + Number.EPSILON) * 10 ** decimalPlaces) /
		10 ** decimalPlaces;

	return roundNum;
};
