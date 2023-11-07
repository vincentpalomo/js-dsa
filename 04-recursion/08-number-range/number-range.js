function numberRange(startNum, endNum) {
  // base case
  if (startNum === endNum) {
    return [startNum];
  }
  // recursive case
  // let numbers = [];
  // numbers.push(startNum);
  // const result = numberRange(startNum + 1, endNum);
  // return (numbers = numbers.concat(result));
  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

module.exports = numberRange;
