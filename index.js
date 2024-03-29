const insertionSort = require("./insertion-sort");
const selectionSort = require("./selection-sort");
const bubbleSort = require("./bubble-sort");
const linearSearch = require("./linear-search");
const binarySearch = require("./binary-search");

const sortTestArraySize = 10;
const sortTestArray = Array.from({ length: sortTestArraySize }, () =>
	Math.floor(Math.random() * sortTestArraySize)
);

console.log(`Sort Test Array: \n${sortTestArray}\n`);

let insertionResult = insertionSort([...sortTestArray]);
console.log(`Insertion Sort: \n${insertionResult}`);

let selectionResult = selectionSort([...sortTestArray]);
console.log(`Selection Sort: \n${selectionResult}`);

let bubbleResult = bubbleSort([...sortTestArray]);
console.log(`Bubble Sort: \n${bubbleResult}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

const searchTestArraySize = 5;
const searchTestArray = Array.from(
	{ length: searchTestArraySize },
	(v, i) => i * 2 + 1
);
const searchTestAnswer = Math.floor(
	Math.random() * searchTestArraySize
);
const searchTestTerm = searchTestArray[searchTestAnswer];
console.log(`Search Test Array: \n${searchTestArray}`);
console.log(`Searching for ${searchTestTerm}`);
console.log(`Result should be ${searchTestAnswer}\n`);

console.log("Linear Search:");
let linearSearchResults = linearSearch(
	[...searchTestArray],
	searchTestTerm
);
console.log(`Result: ${linearSearchResults}`);

console.log("Binary Search:");
let binarySearchResults = binarySearch(
	[...searchTestArray],
	searchTestTerm
);
console.log(`Result: ${binarySearchResults}`);
