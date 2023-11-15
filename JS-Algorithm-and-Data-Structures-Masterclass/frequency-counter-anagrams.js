function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of str2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }
  return true;
}

let result = validAnagram('anagram', 'nagaram');
console.log(result);

let result2 = validAnagram('awesome', 'wesoma');
console.log(result2);
