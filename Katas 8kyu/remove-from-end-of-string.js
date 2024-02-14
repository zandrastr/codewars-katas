// --------------------------------------------------------------
// DESCRIPTION:
// Remove an exclamation mark from the end of a string. 
// For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// --------------------------------------------------------------
// MY SOLUTION 1:
function remove (string) {
    const indexOfLastCharacter = string.length - 1;
    if(string[indexOfLastCharacter] === '!') {
      const modifiedString = string.slice(0, -1);
      return modifiedString;
    } else {
      return string;
    }
};

// --------------------------------------------------------------
// MY SOLUTION 2:
function remove (string) {
    if(string.endsWith('!')) {
      return string.slice(0, -1); 
    } else {
      return string;
    }
};