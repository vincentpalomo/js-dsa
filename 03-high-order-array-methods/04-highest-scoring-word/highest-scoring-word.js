function highestScoringWord(str) {
  // Split each word into an array of characters, convert them to lowercase,
  // and calculate the position value for each character.
  // For each word, calculate the sum of position values for all its characters.
  // Find the maximum sum value among all words.
  // Find the index of the word with the largest sum in the original input string.
  // Return the word with the largest sum.
  //   const words = str.split(' ');

  //   const result = words.map((word) => {
  //     return word.split('').map((char) => char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1);
  //   });
  //   const sum = result.map((charArray) => {
  //     return charArray.reduce((total, sum) => total + sum, 0);
  //   });
  //   const maxSum = Math.max(...sum);
  //   const indexOfMaxSum = sum.indexOf(maxSum);
  //   return words[indexOfMaxSum];
  // Split the input string into an array of words using the split method.
  // Use the map method to calculate the score for each word.
  // For each letter in a word, we get its character code using charCodeAt(0)
  // and subtract 96 to get its position in the alphabet (e.g., a becomes 1, b becomes 2, and so on).
  // We sum these positions to get the score for the word.
  // Find the index of the word with the highest score using a loop.
  // If the current score is greater than the highest score found so far,
  // we update the highestScore and highestIndex variables.
  // Return the word with the highest score using the highestIndex.
  //   const words = str.split(' ');
  //   //   const scores = words.map((word) => {
  //   //     let score = 0;
  //   //     for (const letter of word) {
  //   //       score += letter.charCodeAt(0) - 96;
  //   //     }
  //   //     return score;
  //   //   });
  //   const scores = words.map((word) => {
  //     return Array.from(word).reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);
  //   });
  //   //   let highestScore = 0;
  //   //   let highestIndex = 0;
  //   let highestScore = Math.max(...scores);
  //   let highestIndex = scores.indexOf(highestScore);
  //   //   for (let i = 0; i < scores.length; i++) {
  //   //     if (scores[i] > highestScore) {
  //   //       highestScore = scores[i];
  //   //       highestIndex = i;
  //   //     }
  //   //   }
  //   return words[highestIndex];

  const words = str.split(' ');

  const scores = words.map((word) => {
    return Array.from(word).reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);
  });

  let highestScore = Math.max(...scores);
  let highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

module.exports = highestScoringWord;
