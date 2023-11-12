function selectionSort(arr) {
  // loop thru the input arr except for the last element
  // set the minIndex to the current index
  // nested loop tru the input arr starting at the next element of i
  // if the current j element is less than the min element
  // set minIndex to j
  // if minIndex is not equal to current index
  // using destructuring assignment, swap the values at the two indices in the array [i, minIndex] = [minIndex, i]
  // return arr
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    console.log(minIndex);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

module.exports = selectionSort;
