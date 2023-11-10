function symmetricDifference(arr1, arr2) {
  // create one set for duplicate numbers
  // create another set for non duplicate numbers
  // loop thru both arrays
  // if arr1 element is equal to arr2 element add to duplicate set
  // else add to non duplicate set
  // return non duplicate set as an array

  //   const duplicates = new Set();
  //   const nonDuplicates = new Set();

  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr1.length; j++) {
  //       if (arr1[i] === arr2[j]) {
  //         duplicates.add(arr1[i]);
  //       }
  //     }
  //   }

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (!duplicates.has(arr1[i])) {
  //       nonDuplicates.add(arr1[i]);
  //     }
  //   }
  //   for (let i = 0; i < arr2.length; i++) {
  //     if (!duplicates.has(arr2[i])) {
  //       nonDuplicates.add(arr2[i]);
  //     }
  //   }

  //   return [...nonDuplicates];

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];

  for (const num of set1) {
    if (!set2.has(num)) {
      result.push(num);
    }
  }
  for (const num of set2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

module.exports = symmetricDifference;
