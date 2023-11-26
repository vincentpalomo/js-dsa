// Write a function called minSubArrayLen which accepts two parameters
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which
//  the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Examples:
//         minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
//         minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
//         minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
//         minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
//         minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
//         minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
//         minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

function minSubArrayLen(arr, num) {
  // if arr is empty return 0
  // create two pointers, start and end both at 0
  // create minLen and set to pos infinity
  // create currentSum to 0
  // while end is less than arr length
  // add current end to currentSum
  // while currentSum is greater than or equal to num
  // update minLen with the min of minLen and (end - start + 1)
  // subtract arr start from current
  // increment start
  // increment end outside inner while loop
  // outside outer while loop, if minLen is still pos infinity return 0
  // return minLen

  if (arr.length === 0) return 0;

  let start = 0;
  let end = 0;

  let minLen = Infinity;
  let currentSum = 0;

  while (end < arr.length) {
    currentSum += arr[end];

    while (currentSum >= num) {
      minLen = Math.min(minLen, end - start + 1);
      currentSum -= arr[start];
      start++;
    }

    end++;
  }

  if (minLen === Infinity) return 0;

  return minLen;
}

let result = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
console.log(result);

module.exports = minSubArrayLen;
