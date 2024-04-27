// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

// Constraints:

//     1 <= words.length <= 100
//     1 <= words[i].length <= 100
//     words[i] consists only of lowercase English letters.

const firstPalindrome = (words) => {
  let palindrome = '';

  for (let i in words) {
    let word = words[i];
    let s = 0;
    let e = word.length - 1;

    if (word.length == 1) return (palindrome = word);

    while (s < e) {
      if (word[s] == word[e]) {
        s++;
        e--;
      } else {
        s -= 1;
        break;
      }
    }

    if (s != -1) {
      palindrome = word;
      break;
    }
  }

  return palindrome;
};

let result = firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']); // should return ada
console.log(result);
