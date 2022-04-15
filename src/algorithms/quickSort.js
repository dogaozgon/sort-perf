function quickSort(inputArray) {
	quickSortHelper(inputArray);

	return inputArray;
}

function quickMax(inputArray) {
	const sortedArray = quickSort(inputArray);
	const max = sortedArray.pop();

	return max;
}

function quickMin(inputArray) {
	const sortedArray = quickSort(inputArray);
	const min = sortedArray[0];

	return min;
}

const swap = (arr, left, right) => {
	const temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;
};

const partitionHigh = (arr, low, high) => {
	//Picking the first element as pivot
	let pivot = arr[high];
	let i = low;

	// Split the array into two halves using the pivot
	for (let j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			swap(arr, i, j);
			i++;
		}
	}

	swap(arr, i, high);

	//Return the pivot index
	return i;
};

const quickSortHelper = (inputArr) => {
	//Stack for storing start and end index
	let stack = [];

	//Get the start and end index
	let startIndex = 0;
	let endIndex = inputArr.length - 1;

	//Push start and end index in the stack
	stack.push({ x: startIndex, y: endIndex });

	//Iterate the stack
	while (stack.length) {
		//Get the start and end from the stack
		const { x, y } = stack.shift();

		//Partition the array along the pivot
		const PI = partitionHigh(inputArr, x, y);

		//Push sub array with less elements than pivot into the stack
		if (PI - 1 > x) {
			stack.push({ x: x, y: PI - 1 });
		}

		//Push sub array with greater elements than pivot into the stack
		if (PI + 1 < y) {
			stack.push({ x: PI + 1, y: y });
		}
	}
};

export { quickSort, quickMax, quickMin };
