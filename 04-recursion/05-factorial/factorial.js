function factorial(num) {
  // console.log(`Calculating factorial(${num})`);
  // base case
  if (num === 0 || num === 1) {
    // console.log(`Base case reached for factorial(${num})`);
    return 1;
  }
  // recursive case
  // return num * factorial(num - 1);
  const result = num * factorial(num - 1);
  // console.log(`factorial(${num}) = ${num} * factorial(${num - 1}) = ${num} * factorial(${num - 1}) = ${result}`);
  return result;
}

module.exports = factorial;
