// --------------------------------------------------------------
// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// --------------------------------------------------------------
// MY SOLUTION 1:
function shortcut(string) {
	const myArray = [...string];
	const vowels = ["a", "e", "i", "o", "u"];
	const filteredArray = myArray.filter((char) => !vowels.includes(char));
    const newString = filteredArray.toString().replaceAll(",", "");
    return newString;
}

// --------------------------------------------------------------
// MY SOLUTION 2:
// Using RegEx that matches any vowel (a, e, i, o, u)
// /g stands for global, meaning that the replacement should be applied globally 
// throughout the entire string instead of stopping after the first match.
function shortcut(string) {
	return string.replace(/[aeiou]/g, ""); 
}