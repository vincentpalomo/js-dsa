const maxSubarraySum = (arr, num) => {
  // create a maxsum and tempsum variable to keep track of max sum and current sum
  // check if the input array is smaller than the window size
  // calculate the sum of the first input num elements in the array
  // initialize tempsum with the sum of the first num elements
  // iterate thru the array starting from the num-th element
  // update the tempsum using the sliding window technique
  // update the maxsum with the maximum of current maxsum and tempsum (Math.max)
  // return maxsum
  // let maxSum = 0;
  // let tempSum = 0;
  // if (arr.length < num) return null;
  // for (let i = 0; i < num; i++) {
  //   maxSum += arr[i];
  // }
  // tempSum = maxSum;
  // for (let i = num; i < arr.length; i++) {
  //   tempSum = tempSum - arr[i - num] + arr[i];
  //   // console.log(`Updated temp sum: ${tempSum} (removed ${arr[i - num]}, added ${arr[i]})`);
  //   maxSum = Math.max(maxSum, tempSum);
  // }
  // return maxSum;

  let maxSum = 0;
  let tempSum = 0;

  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  console.log(maxSum);

  tempSum = maxSum;

  console.log(tempSum);

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
};

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3);

module.exports = maxSubarraySum;
