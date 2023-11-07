function arraySum(arr) {
  // console.log(arr);
  // base case
  if (arr.length === 0) {
    return 0;
  }

  // recursive case
  // let sum = 0;
  // sum += arr[0];
  // const result = arraySum(arr.slice(1));
  // sum += result;
  return (arr[0] += arraySum(arr.slice(1)));
}

module.exports = arraySum;
