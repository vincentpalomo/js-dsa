const mergeStringAlternatively = require('./merge-string-alternatively');

test(`Inputs 'abc' and 'xyz' should return 'axbycz'`, () => {
  expect(mergeStringAlternatively('abc', 'xyz')).toBe('axbycz');
});

test(`Inputs 'wasd' and 'qwerty' should return 'wqawsedrty'`, () => {
  expect(mergeStringAlternatively('wasd', 'qwerty')).toBe('wqawsedrty');
});

test(`Inputs 'aaaaa' and 'bb' should return 'ababaaa'`, () => {
  expect(mergeStringAlternatively('aaaaa', 'bb')).toBe('ababaaa');
});
