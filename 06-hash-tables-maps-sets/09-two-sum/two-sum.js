function twoSum(nums, target) {
  // create set
  // iterate through input array
  // create a compliment inside the loop
  // check if compliment is inside the set
  // return the index of the compliment and current index
  // add current number into set
  // if nothing is found return an empty array

  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (numSet.has(compliment)) {
      return [nums.indexOf(compliment), i];
    }

    numSet.add(nums[i]);
  }

  return [];
}

module.exports = twoSum;
