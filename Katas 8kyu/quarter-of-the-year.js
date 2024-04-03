// --------------------------------------------------------------
// DESCRIPTION:

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example:
// Month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// --------------------------------------------------------------
// MY SOLUTION 1:
// Using if statements
const quarterOf = (month) => {
  if (month === 1 || month === 2 || month === 3) {
    return 1;
  } else if (month === 4 || month === 5 || month === 6) {
    return 2;
  } else if (month === 7 || month === 8 || month === 9) {
    return 3;
  } else if (month === 10 || month === 11 || month === 12) {
    return 4;
  }
};

// --------------------------------------------------------------
// MY SOLUTION 2:
// Using switch statement
const quarterOfYear = (month) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
    case 4:
    case 5:
    case 6:
      return 2;
    case 7:
    case 8:
    case 9:
      return 3;
    case 10:
    case 11:
    case 12:
      return 4;
    default:
      return 'Invalid month.';
  }
};
