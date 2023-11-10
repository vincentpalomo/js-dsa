function longestConsecutiveSequence(nums) {
  // create set
  // create variable for longestSequence
  // loop thru numset and check if numset does not have num - 1

  const numSet = new Set(nums);

  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}

module.exports = longestConsecutiveSequence;
