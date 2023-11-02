function titleCase(str) {
  // split incoming string and lowercase
  // loop thru each word
  // change the first index of each word to uppercase and combine the rest of the letters
  // return all the words back to one string
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}

module.exports = titleCase;
