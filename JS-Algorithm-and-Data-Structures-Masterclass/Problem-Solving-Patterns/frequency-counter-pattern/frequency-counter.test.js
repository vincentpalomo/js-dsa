const same = require('./frequency-counter-jest');

test('input array 2 has the squared of input array 1 must be true', () => {
  expect(same([1, 2, 3, 4, 5], [9, 1, 4, 16, 25])).toBe(true);
});

test('input array 2 has the squared of input array 1 must be false', () => {
  expect(same([1, 2, 3, 4, 5], [9, 1, 80, 16, 25])).toBe(false);
});

test('input array 2 is smaller than input array 1 must be false', () => {
  expect(same([1, 2, 3, 4, 5], [9, 1, 4])).toBe(false);
});
