// implement a function called countUniqueValues,
// which accepts a sorted array and counts the unique values in the array
// there can be negative numbs in the array, but it will always be sorted
// ex: countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
//     countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
//     countUniqueValues([-2, -1, -1, 0, 1]) // 4
//     countUniqueValues([]) // 0

// function countUniqueValues(arr) {
//   let left = 0;

//   for (let right = 1; right < arr.length; right++) {
//     if (arr[left] !== arr[right]) {
//       left++;
//       arr[left] = arr[right];
//     }
//   }

//   return left + 1;
// }

// let result = countUniqueValues([1, 1, 1, 1, 1, 2]); // must return 2

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

let result = countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]); // must return 7
console.log(result);

let result2 = countUniqueValues([]); // return 0
console.log(result2);

const countUnique = (arr) => {
  // set i point to 0
  // loop thru input arr j and start at second index
  // if value of i is not equal to value j
  // increment i by 1
  // swap value of i to j

  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

let result3 = countUnique([1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10]); // return 10
console.log(result3);

const sumZero = (arr) => {
  // set left pointer to 0
  // set right pointer to last index of array
  // while left is less than right
  // get the total of arr value left and arr value right
  // if total equals 0 return the values of left and right
  // else if total is greater than 0, decrement right
  // else increment left

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
};

let result4 = sumZero([-4, -3, -2, -1, 0, 1, 5, 6, 8]); // [3, 5] but return actual values [-1, 1]
console.log(result4);
