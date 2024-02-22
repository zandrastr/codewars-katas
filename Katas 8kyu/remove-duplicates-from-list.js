// --------------------------------------------------------------
// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// --------------------------------------------------------------
// MY SOLUTION 1:
// Using the array filter method
function distinct(array) {
	const filteredArray = array.filter((number, index) => array.indexOf(number) === index);
	return filteredArray;
}

// --------------------------------------------------------------
// MY SOLUTION 2:
// Using the Set object:
// A JavaScript Set is a collection of unique values (each value can only occur once in a Set)
// Any duplicate values from the array are automatically removed
function distinct(array) {
	const uniqueSet = new Set(array); // Creates a new Set object by passing the array
	const newArray = [...uniqueSet]; // Converts the Set back to an array by using spread operator
	return newArray;
}
