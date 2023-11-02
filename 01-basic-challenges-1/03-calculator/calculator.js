function calculator(num1, num2, op) {
  // if op is equal to +
  // return num1 + num2
  // else if op is equal to -
  // return num1 - num2
  // else if op is equal to *
  // return num1 • num2
  // else if op is equal to /
  // return num1 / num2
  // else
  // return 'Invalid Operator'
  if (op == '+') {
    return num1 + num2;
  } else if (op == '-') {
    return num1 - num2;
  } else if (op == '*') {
    return num1 * num2;
  } else if (op == '/') {
    return num1 / num2;
  } else {
    return 'Invalid Operator';
  }
}

module.exports = calculator;
