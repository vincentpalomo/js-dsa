const isSubsequence = require('./isSubsequence');

test(`isSubsequence('hello', 'hello world') return true`, () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true);
});

test(`isSubsequence('sing', 'sting') return true`, () => {
  expect(isSubsequence('sing', 'sting')).toBe(true);
});

test(`isSubsequence('abc', 'abracadabra') return true`, () => {
  expect(isSubsequence('abc', 'abracadabra')).toBe(true);
});

test(`isSubsequence('abc', 'acb') return false (order matters)`, () => {
  expect(isSubsequence('abc', 'acb')).toBe(false);
});

test(`isSubsequence('jinx', 'jonx') return false`, () => {
  expect(isSubsequence('jinx', 'jonx')).toBe(false);
});
