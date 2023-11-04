function findMissingLetter(arr) {
  // create an alphabet string
  // create a starter pointer at 0
  // loop thru alphabet
  //   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   const start = alphabet.indexOf(arr[0]);

  //   for (let i = 0; i < arr.length; i++) {
  //     // console.log(alphabet[start + i]);
  //     if (arr[i] != alphabet[start + i]) {
  //       return alphabet[start + i];
  //     }
  //   }

  let start = arr[0].charCodeAt(0);

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);

    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }

    start = current;
  }

  return '';
}

module.exports = findMissingLetter;
