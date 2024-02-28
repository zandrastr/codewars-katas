// --------------------------------------------------------------
// DESCRIPTION:
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// --------------------------------------------------------------
// MY SOLUTION 1:
function findNeedle(haystack) {
	const needle = (element) => element === "needle";
    const indexOfNeedle = haystack.findIndex(needle);
	return `found the needle at position ${indexOfNeedle}`;
}

// --------------------------------------------------------------
// MY SOLUTION 2:
function findNeedle(haystack) {
    const indexOfNeedle = haystack.indexOf('needle');
	return `found the needle at position ${indexOfNeedle}`;
}