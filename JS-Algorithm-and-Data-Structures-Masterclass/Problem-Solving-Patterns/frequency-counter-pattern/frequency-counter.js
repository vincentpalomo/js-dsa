// O(n)
function same(arr1, arr2) {
  // check if the lengths of both arrays are not equal, return false
  // create two frequencyCounters for each array
  // populate frequencyCounter1 and frequencyCounter2
  // loop thru frequencyCounter1 for each key
  // check if the square of each key in freq1 exist in freq2 with the same count
  // if the square of key in arr1 is not present in arr2, return false
  // if the count of the squared value in arr2 is not the same as in arr1, return false
  // if all conditions are met, return true

  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  return true;
}

let result = same([1, 2, 3, 4, 5], [9, 1, 4, 16, 25]);
console.log(result);

function sameF() {
  let args = [...arguments];

  let f1 = {};

  for (let val of args) f1[val] = (f1[val] || 0) + 1;

  for (let key in f1) {
    if (f1[key] > 1) return true;
  }

  return false;
}

let result2 = sameF('a', 'b', 'c', 'd');
console.log(result2);

const sameNums = (n1, n2) => {
  let num1 = n1.toString();
  let num2 = n2.toString();

  if (num1.length !== num2.length) return false;

  let f1 = {};
  let f2 = {};

  for (let val of num1) f1[val] = (f1[val] || 0) + 1;
  for (let val of num2) f2[val] = (f2[val] || 0) + 1;

  for (let key in f1) {
    if (!(key in f2)) return false;
  }

  return true;
};

let result3 = sameNums(123, 321);
console.log(result3);
