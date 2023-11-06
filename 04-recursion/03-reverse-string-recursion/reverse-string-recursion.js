function reverseString(str) {
  // base case
  // if string is empty '' return ''
  if (str === '') {
    // console.log('base case reached: ', str);
    return '';
  }

  // recursive case
  // call the function and start from the second character then adding the first to the end
  //   console.log('before recursive call: ', str.substring(1) + str[0]);
  const result = reverseString(str.substring(1)) + str[0];
  //   console.log('after recursive call: ', str.substring(1) + str[0]);
  return result;
}

// const reverseStringAF = (str) => (str === '' ? '' : reverseStringAF(str.substring(1)) + str.charAt(0));
// const result = reverseStringAF('jinx');
// console.log(result);

module.exports = reverseString;
