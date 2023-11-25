// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Sample Input:

//     averagePair([1,2,3],2.5) // true
//     averagePair([1,3,3,5,6,7,10,12,19],8) // true
//     averagePair([-1,0,3,4,5,6], 4.1) // false
//     averagePair([],4) // false

function averagePair(nums, target) {
  // create two pointers, left (0 index) and right (last index of array)
  // if the nums array equals 0 return false
  // while left is less than right
  // get the current sum of left and right
  // get the current average of current sum
  // if current average is equal to target
  // return true
  // else if current average is less than target
  // increment left
  // else decrement right (current average is greater than target)
  // return false if nothing matches

  if (nums.length === 0) return false;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let currentSum = nums[left] + nums[right];
    let currentAvg = currentSum / 2;

    if (currentAvg === target) {
      return true;
    } else if (currentAvg < target) {
      left++;
    } else {
      right--;
    }
  }
}

const result = averagePair([1, 2, 3], 2.5);
console.log(result);

module.exports = averagePair;
