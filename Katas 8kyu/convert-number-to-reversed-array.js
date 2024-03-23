// --------------------------------------------------------------
// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// --------------------------------------------------------------
// MY SOLUTION :
// 1. toString() - Converts the numbers to a string
// 2. split('') - Splits the string into an array of substrings (using empty string as separator to split into individual characters)
// 3. map(Number) - Calls Number on each value in the array
// 4. reverse() - Reverses the array

function digitize(n) {
  return n.toString().split('').map(Number).reverse();
}
