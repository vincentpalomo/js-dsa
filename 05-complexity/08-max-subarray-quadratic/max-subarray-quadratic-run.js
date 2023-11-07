const maxSubarraySum = require('./max-subarray-quadratic');

const arr = [2, 5, 3, 1, 11, 7, 6, 4];

const result = maxSubarraySum(arr, 3);

console.log(result);

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
const k2 = 4;
console.log(maxSubarraySum(arr2, k2));
