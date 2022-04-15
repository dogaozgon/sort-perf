function bubbleSort(inputArray) {
	for (let i = 0; i < inputArray.length; i++) {
		for (let j = 0; j < inputArray.length - i - 1; j++) {
			if (inputArray[j] > inputArray[j + 1]) {
				let temp = inputArray[j];
				inputArray[j] = inputArray[j + 1];
				inputArray[j + 1] = temp;
			}
		}
	}

	// Print the sorted array
	// console.log(inputArray);
	return inputArray;
}

function bubbleMax(inputArray) {
	const sortedArray = bubbleSort(inputArray);
	const max = sortedArray.pop();
	return max;
}

function bubbleMin(inputArray) {
	const sortedArray = bubbleSort(inputArray);
	const min = sortedArray[0];
	return min;
}

export { bubbleSort, bubbleMax, bubbleMin };
