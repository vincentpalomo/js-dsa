function findMissingLetter(arr) {
  // create an alphabet string both upper and lowercase
  // create a starter pointer at 0 and use indexOf()
  // loop thru input arr
  // if current arr iteration is not equal to alphabet start + i
  // return alphabet current index of alphabet string
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const start = alphabet.indexOf(arr[0]);
  //   console.log('starting index: ', start);

  for (let i = 0; i < arr.length; i++) {
    // console.log(start + i);
    // console.log(alphabet[start + i]);
    if (arr[i] != alphabet[start + i]) {
      //   console.log('current array value: ', arr[i], 'current alphabet value: ', alphabet[start + i]);
      return alphabet[start + i];
    }
  }

  //   let start = arr[0].charCodeAt(0);

  //   for (let i = 0; i < arr.length; i++) {
  //     const current = arr[i].charCodeAt(0);

  //     if (current - start > 1) {
  //       return String.fromCharCode(start + 1);
  //     }

  //     start = current;
  //   }

  return '';
}

module.exports = findMissingLetter;
