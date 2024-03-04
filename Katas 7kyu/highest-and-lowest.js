// --------------------------------------------------------------
// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// --------------------------------------------------------------
// MY SOLUTION:
// Split the input string into an array of strings.
// Find the minimum/maximum number in the array using the spread operator (...) to pass individual elements as arguments.
// *** Not using the spread operator in this context, Math.min and Math.max functions won't work as intended. These functions expect individual arguments, not an array. 
function highAndLow(numbers) {
	const numbersArray = numbers.split(" ");
	const minNumber = Math.min(...numbersArray);
	const maxNumber = Math.max(...numbersArray);
    return maxNumber + " " + minNumber;
}