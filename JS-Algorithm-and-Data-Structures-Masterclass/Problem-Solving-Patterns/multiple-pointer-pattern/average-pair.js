// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Sample Input:

//     averagePair([1,2,3],2.5) // true
//     averagePair([1,3,3,5,6,7,10,12,19],8) // true
//     averagePair([-1,0,3,4,5,6], 4.1) // false
//     averagePair([],4) // false

function averagePair(arr, num) {
  // create two pointers, start (0 index) and end (last index of array)
  // if the input array equals 0 return false
  // while start is less than end
  // get the current sum of start and end
  // get the current average of current sum
  // if current average is equal to num
  // return true
  // else if current average is less than num
  // increment start
  // else decrement end (current average is greater than num)
  // return false if nothing matches

  if (arr.length === 0) return false;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }

  return false;
}

const result = averagePair([1, 2, 3], 2.5);
console.log(result);

module.exports = averagePair;
