// implement a function called countUniqueValues,
// which accepts a sorted array and counts the unique values in the array
// there can be negative nums in the array, but it will always be sorted

const countUniqueValues = (arr) => {
  // if arr length is 0 return 0
  // create a i point starting at 0
  // put the j pointer starting at second index inside the for loop of input arr
  // if arr value i is not equal to arr value j
  // increment i
  // swap arr value i with arr value j
  // return i plus 1

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

module.exports = countUniqueValues;
