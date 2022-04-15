function dogaSort(inputArray) {
	let sortedArray = [];
	let finalArray = [];

	inputArray.forEach((el) => (sortedArray[el] = el));
	const iterator = Object.values(sortedArray);
	for (const key of iterator) {
		finalArray.push(key);
	}

	// console.log(finalArray);
	return finalArray;
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
