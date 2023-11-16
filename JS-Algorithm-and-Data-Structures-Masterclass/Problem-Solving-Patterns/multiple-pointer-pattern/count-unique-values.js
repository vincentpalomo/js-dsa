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

let result2 = countUniqueValues([]);
console.log(result2);
