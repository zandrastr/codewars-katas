// --------------------------------------------------------------
// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true
// XO("zzoo") => false
// when no 'x' and 'o' is present should return true

// --------------------------------------------------------------
// MY SOLUTION:
function XO(str) {
    const array = str.toLowerCase().split("");
    const foundO = array.filter((char) => char == "o"); 
    const foundX = array.filter((char) => char == "x");
    const result = foundX.length == foundO.length ? true : false;
    return result;
}