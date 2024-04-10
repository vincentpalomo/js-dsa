// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Constraints:

//     1 <= s.length <= 104
//     s contains English letters (upper-case and lower-case), digits, and spaces ' '.
//     There is at least one word in s.

let reverseWords = function (s) {
  // let ss = s.split(/\s+/).filter(Boolean);

  // console.log(ss);

  // let i = 0;
  // let j = ss.length - 1;

  // console.log(i, j);

  // while (i < j) {
  //   [ss[i], ss[j]] = [ss[j], ss[i]];
  //   i++;
  //   j--;
  // }

  // console.log(ss);

  // return ss.join(' ');

  /* REFACTOR */

  // let i = 0;
  // let j = s.length - 1;

  // while (i <= j && s[i] === ' ') i++;
  // while (j >= i && s[j] === ' ') j--;
  // s = s.substring(i, j + 1);

  // console.log(s);

  // let ss = s.split(/\s+/);

  // console.log(ss);

  // n = 0;
  // m = ss.length - 1;

  // while (n < m) {
  //   [ss[n], ss[m]] = [ss[m], ss[n]];
  //   n++;
  //   m--;
  // }

  // return ss.join(' ');

  let i = 0;
  let j = s.length - 1;

  while (i <= j && s[i] === ' ') i++;
  while (j >= i && s[j] === ' ') j--;
  s = s.substring(i, j + 1);

  console.log(s);

  let ss = s.split(/\s+/);

  console.log(ss);

  let out = '';

  for (let k = ss.length - 1; k > 0; k--) {
    out += ss[k] + ' ';
  }

  out += ss[0];

  return out;
};

let result = reverseWords(' hello world '); // returns 'blue is sky the'
console.log(result);
