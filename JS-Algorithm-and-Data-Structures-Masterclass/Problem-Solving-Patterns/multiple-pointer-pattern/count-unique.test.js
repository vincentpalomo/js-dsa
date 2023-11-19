const countUniqueValues = require('./count-unique-jest');

test('The unique values in [1, 2, 3, 4, 4, 5, 5, 6, 7] should equal 7', () => {
  expect(countUniqueValues([1, 2, 3, 4, 4, 5, 5, 6, 7])).toBe(7);
});

test('The unique values in [] should be 0', () => {
  expect(countUniqueValues([])).toBe(0);
});

test('The unique values in [-1, 0, 1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8 ,9] should equal 11', () => {
  expect(countUniqueValues([-1, 0, 1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9])).toBe(11);
});

test('The unique values in [-5, -4, -4, -3, -2, -2, -1, 0, 1, 2] should equal 8', () => {
  expect(countUniqueValues([-5, -4, -4, -3, -2, -2, -1, 0, 1, 2])).toBe(8);
});

test('The unique value in [1, 2, ,2 ,3] should equal 3', () => {
  expect(countUniqueValues([1, 2, 2, 3])).toBe(3);
});
