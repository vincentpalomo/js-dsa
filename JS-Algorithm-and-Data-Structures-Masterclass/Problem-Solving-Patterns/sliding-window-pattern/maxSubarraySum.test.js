const maxSubarraySum = require('./maxSubarraySum');

test('The max sum of [1, 2, 5, 2, 8, 1, 5] at 2 consecutive elements is 10', () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
});

test('The max sum of [2, 6, 9, 2, 1, 8, 5, 6, 3] at 3 consecutive elements is 19', () => {
  expect(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).toBe(19);
});

test('The max sum of [1, 2, 5, 2, 8, 1, 5] at 4 consecutive elements is 17', () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
});
