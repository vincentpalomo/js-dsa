function findMissingNumber(arr) {
  // loop thru array
  // if arr does not include i
  // return i
  if (arr.length === 0) return 1;
  //   for (let i = 1; i <= arr.length; i++) {
  //     if (!arr.includes(i)) {
  //       return i;
  //     }
  //   }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  //   let actualSum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     actualSum += arr[i];
  //   }
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
