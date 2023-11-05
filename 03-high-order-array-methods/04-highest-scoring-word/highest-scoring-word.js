function highestScoringWord(str) {
  // Split each word into an array of characters, convert them to lowercase,
  // and calculate the position value for each character.
  // For each word, calculate the sum of position values for all its characters.
  // Find the maximum sum value among all words.
  // Find the index of the word with the largest sum in the original input string.
  // Return the word with the largest sum.
  const result = str.split(' ').map((word) => {
    return word.split('').map((char) => char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1);
  });

  const sum = result.map((charArray) => {
    return charArray.reduce((total, sum) => total + sum, 0);
  });

  const maxSum = Math.max(...sum);

  const indexOfMaxSum = sum.indexOf(maxSum);

  return str.split(' ')[indexOfMaxSum];
}

module.exports = highestScoringWord;
