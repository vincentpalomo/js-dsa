// write a function called same, which accepts two arrays.
// the function should return true if every value in the array
// has it's corresponding values squared in the second array.
// the frequency of values must be the same
// ex: same([1,2,3], [4,1,9]) true
//     same([1,2,3], [1, 9]) false
//     same([1,2,1], [4,4,1]) false (must be same frequency)

// bigO n^2
function same(arr1, arr2) {
  // loop thru the first array and get the squared values of each element
  // set a isSame as a boolean, **having the boolean inside the for loop with reset the value to false for every iteration
  // nest another loop and go thru each element in the second array
  // if the element in array1 is equal to the element in the second array
  // update isSame to true and break
  // if isSame is false return false
  // outside of both loops return true
  if (arr1.length !== arr2.length) return false;

  // for (let i = 0; i < arr1.length; i++) {
  //   let squared = arr1[i] ** 2;
  //   let isSame = false;
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (squared === arr2[j]) {
  //       isSame = true;
  //       break;
  //     }
  //   }
  //   if (!isSame) {
  //     return false;
  //   }
  // }
  // return true;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(correctIndex);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

let result = same([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(result);
