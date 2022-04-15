function insertionSort(inputArray) {
	let arrayLength = inputArray.length;
	for (let i = 1; i < arrayLength; i++) {
		let currentElement = inputArray[i];

		let j = i - 1;
		while (j > -1 && currentElement < inputArray[j]) {
			inputArray[j + 1] = inputArray[j];
			j--;
		}
		inputArray[j + 1] = currentElement;
	}

	// sorted array in place
	//console.log(inputArr);
	return inputArray;
}

function insertionMax(inputArray) {
	const sortedArray = insertionSort(inputArray);
	const max = sortedArray.pop();
	return max;
}

function insertionMin(inputArray) {
	const sortedArray = insertionSort(inputArray);
	const min = sortedArray[0];
	return min;
}

export { insertionSort, insertionMax, insertionMin };
