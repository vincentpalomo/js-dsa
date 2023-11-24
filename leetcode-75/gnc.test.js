const greatestNumberOfCandies = require('./greatest-number-of-candies');

test(`Input candies per kid [2,3,5,1,3], extra candies 3 return [true,true,true,false,true]`, () => {
  expect(greatestNumberOfCandies([2, 3, 5, 1, 3], 3)).toStrictEqual([true, true, true, false, true]);
});

test(`Input candies per kid [4,2,1,1,2], extra candies 1 return [true,false,false,false,false]`, () => {
  expect(greatestNumberOfCandies([4, 2, 1, 1, 2], 1)).toStrictEqual([true, false, false, false, false]);
});

test(`Input candies per kid [12,1,12], extra candies 10 return [true,false,true]`, () => {
  expect(greatestNumberOfCandies([12, 1, 12], 10)).toStrictEqual([true, false, true]);
});
