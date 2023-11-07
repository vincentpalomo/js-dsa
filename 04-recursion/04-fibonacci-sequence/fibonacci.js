function fibonacci(num) {
  //   console.log(`Calculating fibonacci(${num})`);
  // base case
  if (num < 2) {
    // console.log(`Base case reached for fibonacci(${num})`);
    return num;
  }

  // recursive case
  const call1 = fibonacci(num - 1);
  const call2 = fibonacci(num - 2);

  const result = call1 + call2;
  //   console.log(`fibonacci(${num}) = fibonacci(${num - 1}) + fibonacci(${num - 2}) = ${call1} + ${call2} = ${result}`);
  return result;
  // concise
  //   return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
