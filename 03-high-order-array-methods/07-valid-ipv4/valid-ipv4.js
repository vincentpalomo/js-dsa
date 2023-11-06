const isValidIPv4 = (add) => {
  // split input string by .
  // if split length is not 4 return false
  // use every higher order method, this will check if all octets are valid
  // parse the octet number, this will remove the 0 infront of any number in the string
  // check if the number is between 0 and 255
  // check if the octet is equal to the number converted back to a string, this is to check for leading 0

  // const numbers = add.split('.');

  // if (numbers.length !== 4) {
  //   return false;
  // }

  // return numbers.every((octet) => {
  //   const num = parseInt(octet);
  //   return num >= 0 && num <= 255 && octet === num.toString();
  // });

  const numbers = add.split('.');

  if (numbers.length !== 4) {
    return false;
  }

  return numbers.every((octet) => {
    let num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
};

module.exports = isValidIPv4;
