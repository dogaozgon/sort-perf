function defaultSort(inputArray) {
	inputArray.sort((a, b) => a - b);
	return inputArray;
}

function defaultMax(inputArray) {
	let max = Math.max(...inputArray);
	return max;
}

function defaultMin(inputArray) {
	var min = Math.min(...inputArray);
	return min;
}

export { defaultSort, defaultMax, defaultMin };
