function formatPhoneNumber(arr) {
  // create a beginning empty string
  // create a middle empty string
  // create an end empty string
  // loop thru the input arr
  // if current index is less than 3 add the current index to beginning
  // else if current index is greater than 2 but less than 6 add current index to middle
  // else add current index to end
  // return with a template literal `(${beginning}) ${middle}-${end}`
  //   let beginning = '';
  //   let middle = '';
  //   let end = '';
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i < 3) {
  //       beginning += arr[i];
  //       //   console.log(beginning);
  //     } else if (i > 2 && i < 6) {
  //       middle += arr[i];
  //       //   console.log(middle);
  //     } else {
  //       end += arr[i];
  //       //   console.log(end);
  //     }
  //   }
  //   return `(${beginning}) ${middle}-${end}`;
  //   slice high order array methods
  //   const areaCode = arr.slice(0, 3).join('');
  //   const prefix = arr.slice(3, 6).join('');
  //   const lineNumber = arr.slice(6).join('');
  //   return `(${areaCode}) ${prefix}-${lineNumber}`;
  //   high order array method using join and returning slice all in the template literal
  const formatted = arr.join('');
  return `(${formatted.substring(0, 3)}) ${formatted.substring(3, 6)}-${formatted.substring(6)}`;
}

// const formatPhoneNumberAF = (numbers) =>
//   `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;

// let result = formatPhoneNumberAF([2, 2, 5, 6, 3, 6, 4, 0, 8, 5]);
// console.log(result);

module.exports = formatPhoneNumber;
