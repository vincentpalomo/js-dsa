const sumZero = require('./sum-zero-jest');

test('sumZero of [-3, -2, -1, 0, 1 ,2 ,3] should return [-3, 3]', () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);
});

test('sumZero of [-4, -3, -2, -1, 0, 1, 2, 5, 6] should return [-2, 2]', () => {
  expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 5, 6])).toStrictEqual([-2, 2]);
});

test('sumZero of [-3, -2, -1, 0, 4, 5, 6] should return undefined', () => {
  expect(sumZero([-3, -2, -1, 0, 4, 5, 6])).toBeUndefined();
});

test('sumZero of [-10, -8, -4, -3, -1, 0, 1, 2, 5, 7, 9] should return [-1, 1]', () => {
  expect(sumZero([-10, -8, -4, -3, -1, 0, 1, 2, 5, 7, 9])).toStrictEqual([-1, 1]);
});
