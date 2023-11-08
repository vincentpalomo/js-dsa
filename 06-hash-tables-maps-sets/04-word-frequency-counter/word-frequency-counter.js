function wordFrequencyCounter(str) {
  // split the input string, lowercase and remove any punctuation marks
  // create an empty map to track each word
  // loop thru the split string
  // if word is in the map add one to the value
  // else add word and set value to 1

  const freqCount = new Map();

  const words = str.toLowerCase().split(/\W+/);

  // const words = str
  //   .toLowerCase()
  //   .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
  //   .split(' ');
  // console.log(words);

  // for (let i = 0; i < words.length; i++) {
  //   if (freqCount.has(words[i])) {
  //     console.log('true', words[i]);
  //     freqCount.set(words[i], freqCount.get(words[i]) + 1);
  //   } else {
  //     console.log('false', words[i]);
  //     freqCount.set(words[i], 1);
  //   }
  // }

  for (const word of words) {
    if (word === '') continue;

    if (freqCount.has(word)) {
      freqCount.set(word, freqCount.get(word) + 1);
    } else {
      freqCount.set(word, 1);
    }
  }

  return freqCount;
}

module.exports = wordFrequencyCounter;
