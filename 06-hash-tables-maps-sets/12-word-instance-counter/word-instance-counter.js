const HashTable = require('./HashTable');

function wordInstanceCounter(str, word) {
  const freqCount = new HashTable();

  const words = str.toLowerCase().split(/\W+/);

  const targetWord = word.toLowerCase();

  for (const word of words) {
    if (word === '') continue;

    if (freqCount.has(word)) {
      freqCount.set(word, freqCount.get(word) + 1);
    } else {
      freqCount.set(word, 1);
    }
  }

  if (freqCount.has(targetWord)) {
    return freqCount.get(targetWord);
  }
}

module.exports = wordInstanceCounter;
