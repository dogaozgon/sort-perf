function mergeSort(inputArray) {
	const sortedArray = mergeSortHelper(inputArray);

	return sortedArray;
}

function mergeMax(inputArray) {
	const sortedArray = mergeSort(inputArray);
	const max = sortedArray.pop();

	return max;
}

function mergeMin(inputArray) {
	const sortedArray = mergeSort(inputArray);
	const min = sortedArray[0];

	return min;
}

function mergeSortHelper(inputArray) {
	// If the array is empty or has only one element, no need to sort it
	if (inputArray.length <= 1) {
		return inputArray;
	}

	// Find the middle index to split the array into two halves
	const middleIndex = Math.floor(inputArray.length / 2);

	// Split the array into leftSubarray and rightSubarray
	const leftSubarray = inputArray.slice(0, middleIndex);
	const rightSubarray = inputArray.slice(middleIndex);

	// Combine the leftSubarray and rigthSubarray using recursion
	return merge(mergeSortHelper(leftSubarray), mergeSortHelper(rightSubarray));
}

// Merge the leftSubarray and rightSubarray
function merge(leftSubarray, rightSubarray) {
	let resultArray = [],
		leftSubarrayIndex = 0,
		rightSubarrayIndex = 0;

	// Concatenate values to the resultArray
	while (
		leftSubarrayIndex < leftSubarray.length &&
		rightSubarrayIndex < rightSubarray.length
	) {
		if (leftSubarray[leftSubarrayIndex] < rightSubarray[rightSubarrayIndex]) {
			resultArray.push(leftSubarray[leftSubarrayIndex]);
			leftSubarrayIndex++; // move leftSubarray cursor
		} else {
			resultArray.push(rightSubarray[rightSubarrayIndex]);
			rightSubarrayIndex++; // move rightSubarray cursor
		}
	}

	// We need to concat here because there will be one element remaining
	// from either left OR the right
	return resultArray
		.concat(leftSubarray.slice(leftSubarrayIndex))
		.concat(rightSubarray.slice(rightSubarrayIndex));
}

export { mergeSort, mergeMax, mergeMin };
