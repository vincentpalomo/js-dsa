function fibonacci(num) {
  // base case
  if (num < 2) {
    return num;
  }
  // recursive case
  const call1 = fibonacci(num - 1);
  const call2 = fibonacci(num - 2);
  //   console.log(call1, call2);
  const result = call1 + call2;
  //   console.log(result);
  return result;
}

module.exports = fibonacci;
