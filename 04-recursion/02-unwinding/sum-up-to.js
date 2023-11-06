function sumUpTo(n) {
  // base case
  if (n === 1) {
    // console.log(`sumUpTo(${n}) returns 1`);
    return 1;
  }

  // recursive case
  // console.log(`sumUpTo(${n}) calls sumUpTo(${n - 1}) + ${n}`);
  const result = n + sumUpTo(n - 1);
  // console.log(`sumUpTo(${n}) returns ${result}`);
  return result;
}

module.exports = sumUpTo;
