// --------------------------------------------------------------
// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// --------------------------------------------------------------
// MY SOLUTION 1:
var number=function(array){
	let counter = 0;

  const numberedStrings = array.map((string) => {
    counter++;
    return counter + ': ' + string;
  })	

  return numberedStrings;
}

// --------------------------------------------------------------
// MY SOLUTION 2:
var number=function(array){
  const numberedStrings = array.map((string, index) => {
    return index + 1 + ': ' + string;
  })	

  return numberedStrings;
}