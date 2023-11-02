// function countOccurrences(str, char) {
//   // create a count variable and set to 0
//   // loop thru the string
//   // if the current index value is equal to char
//   // increment count by 1
//   // return count
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

const countOccurrences = (str, char) => str.split(char).length - 1;

module.exports = countOccurrences;
