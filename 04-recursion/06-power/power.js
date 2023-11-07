function power(num, pwr) {
  // base case
  // if num power 0 return 1
  if (pwr === 0) {
    return 1;
  }
  // recursive case
  return num * power(num, pwr - 1);
}

module.exports = power;
