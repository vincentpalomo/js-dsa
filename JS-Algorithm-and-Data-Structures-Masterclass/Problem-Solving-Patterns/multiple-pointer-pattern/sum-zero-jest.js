// write a function called sumZero which accepts a SORTED array of integers
// the function should find the first pair where the sum is 0
// return an array that inclues both values that sum to zero or undefined if pair doesnt exist

const sumZero = (arr) => {
  // create a left pointer starting at 0
  // create a right pointer starting at the end of input arr
  // while left is less than right
  // create a sum variable for left and right value
  // if sum equals 0 return values left and right in an array
  // else if sum is greater than 0
  // decrement right
  // else increment left

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
};

module.exports = sumZero;
