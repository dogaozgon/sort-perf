import { bubbleSort, bubbleMax, bubbleMin } from "./bubbleSort";
import { mergeSort, mergeMax, mergeMin } from "./mergeSort";
import { insertionSort, insertionMax, insertionMin } from "./insertionSort";
import { quickSort, quickMax, quickMin } from "./quickSort";
import { dogaSort, dogaMax, dogaMin } from "./dogaSort";
import { defaultSort, defaultMax, defaultMin } from "./defaultSort";

export const sortingAlgorithms = [
	{
		label: "BubbleSort",
		sort: bubbleSort,
		findMin: bubbleMin,
		findMax: bubbleMax,
	},
	{
		label: "MergeSort",
		sort: mergeSort,
		findMin: mergeMin,
		findMax: mergeMax,
	},
	{
		label: "InsertionSort",
		sort: insertionSort,
		findMin: insertionMin,
		findMax: insertionMax,
	},
	{
		label: "QuickSort",
		sort: quickSort,
		findMin: quickMin,
		findMax: quickMax,
	},
	{
		label: "DogaSort",
		sort: dogaSort,
		findMin: dogaMin,
		findMax: dogaMax,
	},
	{
		label: "BrowserDefault",
		sort: defaultSort,
		findMin: defaultMin,
		findMax: defaultMax,
	},
];
