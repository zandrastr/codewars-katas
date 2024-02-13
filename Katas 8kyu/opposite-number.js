// --------------------------------------------------------------
// DESCRIPTION:
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// --------------------------------------------------------------
// MY SOLUTION 1:
function opposite(number) {
    const oppositeNumber = number * -1;
    return oppositeNumber;
}

// --------------------------------------------------------------
// MY SOLUTION 2:
function opposite(number) {
    const oppositeNumber = -number;
    return oppositeNumber;
}