function removeDuplicates(arr) {
  // brute force
  // create an empty removed array
  // create a nested for loop i & j
  // if i != j push into removed array
  // else do nothing

  let removed = [];

  // for (let i = 0; i < arr.length; i++) {
  //   let isDuplicate = false;
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] === arr[j]) {
  //       isDuplicate = true;
  //       break;
  //     }
  //   }

  //   if (!isDuplicate) {
  //     removed.push(arr[i]);
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    if (!removed.includes(arr[i])) {
      removed.push(arr[i]);
    }
  }

  return removed;
}

// function removeDuplicatesSet(arr) {
//   return Array.from(new Set(arr));
// }

// const result = removeDuplicatesSet([1, 2, 3, 4, 4, 5]);
// console.log(result);

module.exports = removeDuplicates;
