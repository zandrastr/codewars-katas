// --------------------------------------------------------------
// DESCRIPTION:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'

// --------------------------------------------------------------
// MY SOLUTION:
function removeDuplicateWords (s) {
	const array = s.split(" ");
	const filteredArray = array.filter((value, index) => array.indexOf(value) === index);
    return filteredArray.join(' ');
}
