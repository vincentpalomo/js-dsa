function validAnagrams(str1, str2) {
  // split each input strings into characters
  // get total of each string using reduce and charCodeAt(0) - 96
  // compare totals

  //   let firstStr = str1.split('');
  //   let secondStr = str2.split('');

  //   console.log(firstStr, secondStr);

  //   let total1 = firstStr.reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);
  //   let total2 = secondStr.reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);

  //   console.log(total1, total2);

  //   if (total1 === total2) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //   let word1 = str1.split('').reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);
  //   let word2 = str2.split('').reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);

  //   return word1 === word2;

  const freqCount1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every((char) => freqCount1[char] === freqCount2[char]);
}

module.exports = validAnagrams;
