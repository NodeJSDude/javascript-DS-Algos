// take an array and find a number within the array
// what is most efficient way? We are look ing for # 1
// cut in half: check both halves
//  [1,2,3,4 5,6,7,8] -- not in 2nd half
//  so do it again on 1st half:
// [1,2, 3,4] -- not in 2nd half
// so do it again on 1st half:
// [1, 2] -- not in 2nd half
// so do it again on 1st half:
// [1] FOUND IT! 1st half.
// this os O(log n)   **Divide and Conquer
// took 3 steps --  2^3 = 8
// log2(8) = 3
//
// very efficient for large numbers such as:
// lolg2(1073741824) = 31 times to find whats needed
// almost a flat line close to constant time O(1)
//
// ** side note O(nlog n) steep upward curve but most efficient
// for mixed items - not only numbers, like numbers and strings.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(`Checking index ${mid}, value: ${arr[mid]}`);

    if (arr[mid] === target) {
      return mid; // Found!
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const result = binarySearch(sortedArray, 11);
console.log(`Result index: ${result}`);
