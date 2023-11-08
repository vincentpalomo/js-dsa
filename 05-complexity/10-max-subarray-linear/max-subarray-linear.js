function maxSubarraySum(arr, k) {
  // create a variable for current sum
  // create a variable for max sum
  // get the sum of the first window 'k'
  // set the current sum to max sum
  // use the sliding window approach to find the max subarray sum
  // update the current sum by removing the leftmost element of the window
  // add the rightmost element of the window
  // update the max sum if the current sum is greater
  // return max sum

  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    console.log('window: ', [arr[i - 2], arr[i - 1], arr[i]], '-> next window: ', [arr[i - 1], arr[i], arr[i + 1]]);
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
    console.log('remove left: ', arr[i - k], 'add right: ', arr[i], 'currentSum: ', currentSum, 'maxSum: ', maxSum);
    console.log('');
  }

  return maxSum;
}

module.exports = maxSubarraySum;
