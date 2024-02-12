// --------------------------------------------------------------
// DESCRIPTION:
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// --------------------------------------------------------------
// MY SOLUTION 1:
// Will mutate the original array

const list = [1, 2, 3];

function reverseList(list) {
    return list.reverse();
}

// --------------------------------------------------------------
// MY SOLUTION 2:
// Will make a copy of the original array

const list2 = [1, 2, 3];

function reverseList2(list2) {
    const reversedList = [...list2].reverse();
    return reversedList;
}
