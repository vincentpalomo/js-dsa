// function bubbleSort(arr) {
//   // loop thru the entire array
//   // nest another for loop inside that will loop thru the array but stop before the last element
//   // if the current index is greater than the next element, swap the elements
//   // save the current index in a temp variable
//   // set the current index to the next variable
//   // set the next index to the temp variable
//   // return arr
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         console.log('temp: ', temp);
//         arr[j] = arr[j + 1];
//         console.log('current index swap: ', arr[j]);
//         arr[j + 1] = temp;
//         console.log('next index swap: ', arr[j + 1]);
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
  // create a swapped boolean and set to false
  // start a while loop if not swapped
  // set swapped to true
  // loop thru the input arr
  // if current index is greater than next index
  // save the current index in a temp variable
  // set the current index to next index
  // set the next index to the saved index
  // set swapped to false
  // return arr

  let swapped = false;

  while (!swapped) {
    swapped = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = false;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
