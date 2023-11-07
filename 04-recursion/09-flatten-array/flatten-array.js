function flattenArray(arr) {
  // create an empty result array
  // loop thru the arr using for...of loop
  // if the current element is an array, recursively call flattenArray to flatten further
  // then concatenate the result to the result array
  // if the current element is not an array, push it into the result array
  // return result

  let result = [];
  // base case
  for (const item of arr) {
    if (Array.isArray(item)) {
      // recursive case
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArray;
