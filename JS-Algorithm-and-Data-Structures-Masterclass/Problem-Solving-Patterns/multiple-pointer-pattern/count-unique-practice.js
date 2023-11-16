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

let result = countUniqueValues([1, 2, 2, 3, 4, 5, 5, 6, 7]); // return 7
console.log(result);

let result2 = countUniqueValues([]); // return 0
console.log(result2);

let result3 = countUniqueValues([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]); // resturn 9
console.log(result3);
