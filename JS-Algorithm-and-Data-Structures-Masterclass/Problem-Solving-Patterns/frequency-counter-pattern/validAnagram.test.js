const validAnagram = require('./validAnagramJest');

test('voodoo and doooov equals true', () => {
  expect(validAnagram('voodoo', 'doooov')).toBe(true);
});

test('jinx and xint equals false', () => {
  expect(validAnagram('jinx', 'xinl')).toBe(false);
});

test('worm and w equals false', () => {
  expect(validAnagram('worm', 'w')).toBe(false);
});

test('cinema and iceman equals true', () => {
  expect(validAnagram('cinema', 'iceman')).toBe(true);
});
