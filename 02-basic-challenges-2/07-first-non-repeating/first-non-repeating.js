function findFirstNonRepeatingCharacter(str) {
  // create a new empty object variable
  // iterate thru the str and add each value to the object any repeating increase by 1
  // iterate a second time thru the str
  //   if the value is equal to 1 return the value in the object
  // return null at end if there are no non repeating characters
  const charCount = {};

  //   for (const char of str) {
  //     charCount[char] = (charCount[char] || 0) + 1;
  //   }

  //   for (const char of str) {
  //     if (charCount[char] === 1) {
  //       return char;
  //     }
  //   }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  //   const charCount = new Map();

  //   for (const char of str) {
  //     charCount.set(char, (charCount.get(char) || 0) + 1);
  //   }

  //   for (const char of str) {
  //     if (charCount.get(char) === 1) {
  //       return char;
  //     }
  //   }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
