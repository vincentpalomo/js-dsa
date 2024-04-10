// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

//     1 <= s.length <= 3 * 105
//     s consist of printable ASCII characters.

let reverseVowels = function (s) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let ss = s.split('');

  let i = 0;
  let j = ss.length - 1;

  while (i < j) {
    console.log(i, j);
    console.log(ss[i], ss[j]);
    if (vowels.has(ss[i]) && vowels.has(ss[j])) {
      [ss[i], ss[j]] = [ss[j], ss[i]];
      i++;
      j--;
    } else if (vowels.has(ss[i])) {
      j--;
    } else {
      i++;
    }
  }

  return ss.join('');
};

let result = reverseVowels('hello');
console.log(result);
