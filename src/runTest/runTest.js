import dataGenerator from "../data/dataGenerator";

import { sortingAlgorithms } from "../algorithms/algorithms";

function runTest(task, arraySize, arrayType) {
	const unsortedArray = dataGenerator(parseInt(arraySize), arrayType);

	let sortedArrays = [];

	const testDurations = sortingAlgorithms.map((sortingAlgorithm) => {
		const start = Date.now();
		sortedArrays.push(sortingAlgorithm[task]([...unsortedArray]));
		const duration = Date.now() - start;
		return duration;
	});

	return testDurations;
}

export default runTest;
