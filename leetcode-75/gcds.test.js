const greatestCommonDivisor = require('./greatest-common-divisor');

test(`Input 'ABCABC' and 'ABC' should return 'ABC'`, () => {
  expect(greatestCommonDivisor('ABCABC', 'ABC')).toBe('ABC');
});

test(`Input 'ABABAB' and 'AB' should return 'AB'`, () => {
  expect(greatestCommonDivisor('ABABAB', 'AB')).toBe('AB');
});

test(`Input 'LEET' and 'CODE' should return ''`, () => {
  expect(greatestCommonDivisor('LEET', 'CODE')).toBe('');
});
