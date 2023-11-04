function areAllCharactersUnique(str) {
  if (str === '' || str.lenght === 1) return true;
  //   let seen = new Set();
  //   for (let i = 0; i < str.length; i++) {
  //     if (!seen.has(str[i])) {
  //       seen.add(str[i]);
  //     } else {
  //       return false;
  //     }
  //   }

  let charCount = {}; // objects need a value and a key

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      return false;
    } else {
      charCount[char] = true;
    }
    // console.log(charCount);
  }

  return true;
}

module.exports = areAllCharactersUnique;
