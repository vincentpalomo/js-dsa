function findMaxNumber(num) {
  // easy built in method return Math.max(...num)
  // create a current number variable set to the first index in the number array
  // loop thru the array
  // if current number is greater than i
  // update current number to i
  // return current number
  let current = num[0];

  for (let i = 1; i < num.length; i++) {
    if (current < num[i]) {
      current = num[i];
    }
  }

  return current;
}

module.exports = findMaxNumber;
