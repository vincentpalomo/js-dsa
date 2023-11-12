function selectionSort(arr) {
  // outer loop to iterate thru each element
  for (let i = 0; i < arr.length - 1; i++) {
    // assume the current index is the minium
    let minIndex = i;

    // inner loop to find the index of the minimum element in the unsorted part of the arr
    for (let j = i + 1; j < arr.length; j++) {
      // compare the current element with the element at the minIndex
      if (arr[j] < arr[minIndex]) {
        // if a smaller element is found, update minIndex
        minIndex = j;
      }
    }

    // swap the found minimum element with the first element if they are different
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // return sorted array
  return arr;
}

module.exports = selectionSort;
