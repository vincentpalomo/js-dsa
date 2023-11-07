function maxSubarraySum(arr, k) {
  let total = 0;
  let highest = 0;
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    console.log('current number: ', current);
    for (let j = i; j < k; j++) {
      console.log('next k: ', arr[j]);
      total += arr[j];
      console.log('total: ', total);
    }
    if (total > highest) {
      highest = total;
      console.log('highest: ', highest);
      total = 0;
    }
  }

  console.log('highest outside: ', highest);
}

module.exports = maxSubarraySum;
