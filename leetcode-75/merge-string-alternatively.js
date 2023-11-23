// 1786 Merge Strings Alternatively

// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// example:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

const mergeStringAlternatively = (word1, word2) => {
  // create an empty result string
  // get the length of both input words
  // get the min of both input words
  // loop thru the min
  // append both input words to result
  // if word1 is greater return result and append the substring of word1 at n
  // else return result and append the substring of word2 at n

  let result = '';

  let n1 = word1.length;
  let n2 = word2.length;

  let n = Math.min(n1, n2);

  for (let i = 0; i < n; i++) {
    result += word1[i] + word2[i];
  }

  if (n1 === n2) return result;

  if (n1 > n2) {
    return result + word1.substring(n);
  } else {
    return result + word2.substring(n);
  }
};

let result = mergeStringAlternatively('abc', 'pqr');
console.log(result);
