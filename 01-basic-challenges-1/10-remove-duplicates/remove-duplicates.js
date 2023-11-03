function removeDuplicates(arr) {
  // brute force
  // create an empty removed array
  // create a nested for loop i & j
  // if i != j push into removed array
  // else do nothing

  let removed = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       console.log(arr[i], arr[j]);
  //       //   if (arr[i] !== arr[j]) {
  //       //     console.log('adding new to value to removed array');
  //       //     removed.push(arr[i]);
  //       //   }
  //     }
  //   }

  for (let i = 0; i < arr.length; i++) {
    if (!removed.includes(arr[i])) {
      removed.push(arr[i]);
    }
  }

  return removed;
}

module.exports = removeDuplicates;
