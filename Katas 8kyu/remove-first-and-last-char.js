// --------------------------------------------------------------
// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. 
// You don't have to worry about strings with less than two characters.

// --------------------------------------------------------------
// MY SOLUTION 1:
function removeChar(string) {
    const newString = string.slice(1, -1);
    return newString;
};

// --------------------------------------------------------------
// MY SOLUTION 2:
function removeChar(string) {
    return string.slice(1, -1);
};