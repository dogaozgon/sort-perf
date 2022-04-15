export const picker = {
	task: {
		name: "task",
		prompt: "Pick a Task:",
		values: ["sort", "findMin", "findMax"],
		labels: ["sort", "find minimum", "find maximum"],
	},
	arraySize: {
		name: "arraySize",
		prompt: "Pick a Size:",
		values: ["2000", "5000", "10000", "20000", "50000"],
		labels: ["2,000", "5,000", "10,000", "20,000", "50,000"],
	},
	arrayType: {
		name: "arrayType",
		prompt: "Pick an Array Type:",
		values: [
			"unique-random",
			"unique-descending",
			"contains-duplicates-random",
		],
		labels: ["unique random", "unique descending", "non-unique random"],
	},
};
