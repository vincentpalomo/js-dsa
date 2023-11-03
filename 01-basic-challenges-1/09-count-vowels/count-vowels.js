function countVowels(str) {
  // start count variable at 0
  // create a for loop and run thru the str
  // check each letter if they are [a e i o u]
  // if true increase count by 1
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      count++;
    } else if (str[i] === 'e' || str[i] === 'E') {
      count++;
    } else if (str[i] === 'i' || str[i] === 'I') {
      count++;
    } else if (str[i] === 'o' || str[i] === 'O') {
      count++;
    } else if (str[i] === 'u' || str[i] === 'U') {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
