const HashTable = require('./HashTable');

function anagramGrouping(words) {
  let anagrams = new HashTable();

  for (const word of words) {
    const sorted = word.split('').sort().join('');

    if (!anagrams.has(sorted)) {
      anagrams.set(sorted, [word]);
    } else {
      anagrams.get(sorted).push(word);
    }
  }

  return Array.from(anagrams.getValues());
}

module.exports = anagramGrouping;
