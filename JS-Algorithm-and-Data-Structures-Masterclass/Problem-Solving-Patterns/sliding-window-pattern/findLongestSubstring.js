// Write a function called findLongestSubstring,
// which accepts a string and
// returns the length of the longest substring with all distinct characters.

//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6

const findLongestSubstring = (str) => {
  if (str.length === 0) return 0;

  let start = 0;
  let end = 0;
  let longest = 0;
  let seen = {};

  while (end < str.length) {
    let char = str[end];

    if (seen[char] !== undefined && seen[char] >= start) {
      start = Math.max(start, seen[char] + 1);
    } else {
      longest = Math.max(longest, end - start + 1);
    }

    seen[char] = end;
    end++;
  }

  return longest;

  // refactor

  // if (str.length === 0) return 0;

  // let start = 0;

  // let longest = 0;
  // let seen = {};

  // for (let i = 0; i < str.length; i++) {
  //   let char = str[i];
  //   if (seen[char]) start = Math.max(start, seen[char]);

  //   longest = Math.max(longest, i - start + 1);
  //   seen[char] = i + 1;
  // }
  // return longest;
};

let result = findLongestSubstring('thisisawesome'); // return 6
console.log(result);

module.exports = findLongestSubstring;
