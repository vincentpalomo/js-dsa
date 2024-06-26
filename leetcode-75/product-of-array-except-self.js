// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

//     2 <= nums.length <= 105
//     -30 <= nums[i] <= 30
//     The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

const productExceptSelf = function (nums) {
  // let n = nums.length;

  // const prefix = new Array(n).fill(1); // makes a new array filled with 1
  // const suffix = new Array(n).fill(1);

  // for (let i = 1; i < n; i++) {
  //   prefix[i] = prefix[i - 1] * nums[i - 1];
  // }

  // for (let i = n - 2; i >= 0; i--) {
  //   suffix[i] = suffix[i + 1] * nums[i + 1];
  // }

  // console.log(prefix, suffix)

  // const result = [];
  // for (let i = 0; i < n; i++) {
  //   result[i] = prefix[i] * suffix[i];
  // }

  // return result;

  /* REFACTOR */
  let n = nums.length;
  let prefix = 1;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  console.log(result);

  let suffix = 1;

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  console.log(result);

  return result;
};

let result = productExceptSelf([1, 2, 3, 4]);
console.log(result);
