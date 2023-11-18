const sumZero = require('./sum-zero-jest');

test('sumZero of [-3, -2, -1, 0, 1 ,2 ,3] should return [-3, 3]', () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toBe([-3, 3]);
});
