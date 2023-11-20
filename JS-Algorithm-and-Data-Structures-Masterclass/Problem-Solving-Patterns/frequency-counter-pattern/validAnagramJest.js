function validAnagram(str1, str2) {
  // test if the length of each string are the same, if not return false
  // create two frequencyCounters for each input strings
  // fill both the frequencyCounters for each input strings
  // use for in loop get each key in the first frequencyCounter
  // if there the key does not exist in the second frequencyCounter return false
  // if the keys dont match in both frequencyCounters return false
  // return true if it gets passed all the test cases

  if (str1.length !== str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of str2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

module.exports = validAnagram;
