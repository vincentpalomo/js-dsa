function arrayIntersection(arr1, arr2) {
  // create an empty result array
  // loop thru the first array
  // check if arr2 has value of current index of arr1
  // if true push the value into the result array
  // return result array
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
}

function arrayIntersectionSet(arr1, arr2) {
  // create a new Set from first array
  // create an empty result array
  // loop thru the second array
  // if current element is in the Set push current element into set
  // return result array
  const set1 = new Set(arr1);
  let result = [];
  console.log(set1);

  for (let num of arr2) {
    console.log(arr2[num]);
    if (set1.has(num)) {
      console.log('true');
      result.push(num);
    }
  }
  return result;
}

let result = arrayIntersectionSet([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
console.log(result);
let result2 = arrayIntersectionSet([10, 20, 30, 40], [30, 40, 50, 60]);
console.log(result2);

module.exports = arrayIntersection;
