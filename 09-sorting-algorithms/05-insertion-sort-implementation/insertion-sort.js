function insertionSort(arr) {
  // loop thru the arr starting at the 2nd index
  // save the current element
  // create a j variable that will get you the previous element in the array
  // start a while loop where the condition is j greater than or equal to 0 and element j is greater than current
  // shift the j element to the right, j + 1
  // decrement j
  // after while loop insert current element in the 'sorted' part of the array
  // return arr
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (arr[j] >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

module.exports = insertionSort;
