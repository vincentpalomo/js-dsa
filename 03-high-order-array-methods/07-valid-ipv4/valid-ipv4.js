const isValidIPv4 = (add) => {
  // split input string by .
  // if split length is less than 4 or greater than 4 return false
  // map thru split to check each number inside
  // if the values are not between 0 - 255 return false
  // if first value of the number is 088 return false

  const ipNums = add.split('.').map((numbers) => {
    if (numbers < 0 || numbers > 255) {
      return false;
    }
    return numbers;
  });

  if (ipNums.length > 4 || ipNums.length < 4) {
    return false;
  }

  return true;
};

module.exports = isValidIPv4;
