// array 11,3,23,67
myArray.push(17); // adds 17 to the end
myArray.pop(17); // removes 17

// removing from the end of the array is O(n)

// both do not require re-inddexing.
// both are O(1) operations

// shifting
myArray.shift(11); // the 11 is removed but since it was index 0
myArray.unshift(11); // bring 11 back -- still need to re-index
// both require re-indexing the array
// removing from the beginning   array is O(n)

// array 11,3,23,67
myArray.splice(1, 0, "Hi"); // 0 inidcates nothing is to be removed
// we need to add 'Hi' to the 1 index and then re-index the array accordingly
// this is O(n) -- also to remove the 'Hi' same operation
// search by vaue is O(n)
// search by index is O(1)
// bad for large numbers when adding to beginning of array due to re-indexing
