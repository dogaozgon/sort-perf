function dataGenerator(arraySize, arrayType) {
	if (arrayType === "unique-random") {
		return generateUniqueRandomArray(arraySize);
	} else if (arrayType === "unique-descending") {
		return generateUniqueReversedArray(arraySize);
	} else if (arrayType === "contains-duplicates-random") {
		return generateRandomArray(arraySize);
	}
}

function generateUniqueRandomArray(numberOfItems) {
	// create an array starting from 0 and increases value by 3
	let arr = [];
	let step = 3;
	for (let i = 0; i < numberOfItems; i++) {
		arr.push(0 + step * i);
	}

	// shuffle the array in place
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

function generateUniqueReversedArray(numberOfItems) {
	let arr = [];
	let step = 3;
	for (let i = 0; i < numberOfItems; i++) {
		arr.unshift(0 + step * i);
	}
	return arr;
}

function generateRandomArray(numberOfItems) {
	const maxValue = numberOfItems * 3;
	const arr = [...new Array(numberOfItems)].map(() =>
		Math.round(Math.random() * maxValue)
	);
	return arr;
}

export default dataGenerator;
