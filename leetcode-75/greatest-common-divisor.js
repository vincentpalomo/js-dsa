// For two strings s and t, we say "t divides s" if and only if s = t + ... + t
// (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2,
// return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

const greatestCommonDivisor = (str1, str2) => {
  // if (str1 + str2 !== str2 + str1) return '';

  // let n1 = str1.length;
  // let n2 = str2.length;

  // let gcds = function (x, y) {
  //   if (!y) return x;
  //   return gcds(y, x % y);
  // };

  // let div = gcds(n1, n2);

  // return str1.slice(0, div);

  if (str1 + str2 !== str2 + str1) return '';

  let div = gcd(str1.length, str2.length);

  console.log(div);

  function gcd(a, b) {
    if (b > a) {
      [a, b] = [b, a];
    }

    while (b !== 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }

    return a;
  }

  return str1.substring(0, div);
};

let result = greatestCommonDivisor('ABCABC', 'ABC'); // return 'ABC'
console.log(result);

module.exports = greatestCommonDivisor;
