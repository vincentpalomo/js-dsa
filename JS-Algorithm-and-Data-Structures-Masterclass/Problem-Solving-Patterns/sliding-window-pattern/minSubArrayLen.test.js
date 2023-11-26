const minSubArrayLen = require('./minSubArrayLen');

test(`minSubArrayLen([2, 3, 1, 2, 4, 3], 7) return 2`, () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
});

test(`minSubArrayLen([2, 1, 6, 5, 4], 9) return 2`, () => {
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
});

test(`minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) return 1`, () => {
  expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
});

test(`minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) return 5`, () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
});

test(`minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) return 0`, () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
});
