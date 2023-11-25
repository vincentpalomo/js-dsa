const averagePair = require('./average-pair');

test('Average pair [1, 2, 3], 2.5 should return true', () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
});

test('Average pair [1, 3, 3, 5, 6, 7, 10, 12, 19], 8 should return true', () => {
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
});

test('Average pair [-1, 0, 3, 4, 5, 6], 4.1 should return false', () => {
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
});

test('Average pair [], 4 should return false', () => {
  expect(averagePair([], 4)).toBe(false);
});
