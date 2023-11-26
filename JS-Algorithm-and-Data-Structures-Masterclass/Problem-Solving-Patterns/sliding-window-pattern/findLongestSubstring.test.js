const findLongestSubstring = require('./findLongestSubstring');

test(`findLongestSubstring('') return 0`, () => {
  expect(findLongestSubstring('')).toBe(0);
});

test(`findLongestSubstring('rithmschool') return 7`, () => {
  expect(findLongestSubstring('rithmschool')).toBe(7);
});

test(`findLongestSubstring('bbbbbb') return 1`, () => {
  expect(findLongestSubstring('bbbbbb')).toBe(1);
});

test(`findLongestSubstring('longestsubstring') return 8`, () => {
  expect(findLongestSubstring('longestsubstring')).toBe(8);
});
