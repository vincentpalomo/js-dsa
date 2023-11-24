// There are n kids with candies.
// You are given an integer array candies,
// where each candies[i] represents the number of candies the ith kid has,
// and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if,
// after giving the ith kid all the extraCandies,
// they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

const greatestNumberOfCandies = (candies, extraCandies) => {
  // create maxCandies at first array element
  // loop thru the candies array at second index
  // if current index is greater than max, update max
  // create an empty result array
  // loop thru candies array
  // if current index + extra is greater than max
  // update current index to result array and value will be true
  // else current index to result array and value will be false
  // return result

  let maxCandies = candies[0];

  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > maxCandies) maxCandies = candies[i];
  }

  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }

  return result;
};

let result = greatestNumberOfCandies([2, 3, 5, 1, 3], 3); // return [true,true,true,false,true]
console.log(result);

module.exports = greatestNumberOfCandies;
