// write a function called sumZero which accepts a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to zero or undefined if a pair does not exist
// ex sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
//    sumZero([-2, 0, 1, 3]) // undefined
//    sumZero([1, 2, 3]) // undefined

function sumZeroNaive(arr) {
  // naive approach
  // loop thru the array
  // nested loop the array
  // if value of i minus value of j equals 0
  // return the values of i and j inside an array
  // else return undefined
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

let result = sumZeroNaive([-4, -3, -2, -1, 0, 1, 2, 5]);
console.log(result);

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

let result2 = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
console.log(result2);
