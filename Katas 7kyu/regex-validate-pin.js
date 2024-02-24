// --------------------------------------------------------------
// DESCRIPTION:
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

//Examples (Input --> Output)
//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

// --------------------------------------------------------------
// MY SOLUTION :
function validatePIN (pin) {
    const regex = /^(?:\d{4}|\d{6})$/;
    return regex.test(pin);
}

// Regex explanation: 
// ^: Asserts the start of the string.
// (?: ...): A non-capturing group that allows us to group the patterns inside without capturing the matched result.
// \d: Matches any digit (equivalent to [0-9]).
// {4}: Specifies that the preceding \d should appear exactly 4 times.
// |: Alternation, which means either the preceding pattern (4 digits) or the following pattern (6 digits) should match.
// \d{6}: Specifies that the preceding \d should appear exactly 6 times.
// ): Closes the non-capturing group.
// $: Asserts the end of the string.

// The test() method returns a boolean  based on whether the pattern is found in the string or not.
// Typically used when you just want to know if a pattern exists in the string but don't necessarily need the actual matched value.

// The match() method returns an array containing the matched substrings or null if there is no match.
// Useful when you not only want to check if a pattern exists but also need the actual matched value(s).