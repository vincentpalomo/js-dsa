function anagramGrouping(words) {
  // create a new map variable
  // loop thru the words array
  // sort the word
  // check if the current word is in the new map
  // if not add the word to the map key will be the sorted word and the value will be an array of the word
  // else add the word to the value array
  // return the map back to an array using Array.from()

  let anagrams = new Map();

  for (const word of words) {
    const sorted = word.split('').sort().join('');
    if (!anagrams.has(sorted)) {
      anagrams.set(sorted, [word]);
    } else {
      anagrams.get(sorted).push(word);
    }
  }

  return Array.from(anagrams.values());
}

module.exports = anagramGrouping;
