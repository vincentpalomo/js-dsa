// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.

// Examples:

//     isSubsequence('hello', 'hello world'); // true
//     isSubsequence('sing', 'sting'); // true
//     isSubsequence('abc', 'abracadabra'); // true
//     isSubsequence('abc', 'acb'); // false (order matters)

// function isSubsequence(str1, str2) {
//   // create two pointers that start at 0
//   // while both pointers are less than both input string lengths
//   // if str1 current index is equal to str2 current index
//   // increment i
//   // increment j regardless
//   // if i reaches the end of str1 all characters of str1 are found in str2 in order
//   // return i equals str1 length
//   let i = 0;
//   let j = 0;

//   while (i < str1.length && j < str2.length) {
//     if (str1[i] === str2[j]) {
//       i++;
//     }
//     j++;
//   }

//   return i === str1.length;
// }

// refactor for recursion
function isSubsequence(str1, str2) {
  // base case 1: if str1 is an empty string, its a subsequence of any string
  // base case 2: if str2 is an empty string and str1 is not a subsequence
  // if first characters of both input strings match
  // recursively check the remaining characters of both strings
  // recursively check the remaining characters of str2
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

let result = isSubsequence('sing', 'string');
console.log(result);

module.exports = isSubsequence;
