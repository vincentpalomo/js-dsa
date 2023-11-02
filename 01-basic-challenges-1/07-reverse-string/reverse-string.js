function reverseString(str) {
  // create a reverse variable
  // loop thru the str backwards
  // add each char index back to the reverse variable
  // return reverse
  let reverse = '';

  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    reverse += str[i];
  }

  return reverse;
}

// const reverseString = (str) => str.split('').reverse().join('');

module.exports = reverseString;
