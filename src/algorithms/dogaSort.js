function dogaSort(inputArray) {
	let sortedArray = [];

	inputArray.forEach((el) => (sortedArray[el] = el));
	sortedArray = sortedArray.filter((item) => item !== null);

	return sortedArray;
}

function dogaMax(inputArray) {
	let sortedArray = [];
	inputArray.forEach((el) => (sortedArray[el] = el));
	const max = sortedArray.pop();

	return max;
}

function dogaMin(inputArray) {
	let sortedArray = [];
	inputArray.forEach((el) => (sortedArray[el] = el));
	const min = sortedArray.find((item) => item !== undefined);

	return min;
}

export { dogaSort, dogaMax, dogaMin };
