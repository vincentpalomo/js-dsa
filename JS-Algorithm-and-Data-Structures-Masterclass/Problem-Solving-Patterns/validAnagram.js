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

let result = validAnagram('hello', 'olleh');
console.log(result);

let result2 = validAnagram('awesome', 'awesom');
console.log(result2);

let result3 = validAnagram('cinema', 'icemal');
console.log(result3);

function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  let seen = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    seen[letter] ? (seen[letter] += 1) : (seen[letter] = 1);
  }

  console.log(seen);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!seen[letter]) return false;
    else seen[letter] -= 1;
  }

  return true;
}

let result4 = validAnagram2('jinx', 'xnij');
console.log(result4);

function same(first, second) {
  if (first.length !== second.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let val of first) freq1[val] = (freq1[val] || 0) + 1;
  for (let val of second) freq2[val] = (freq2[val] || 0) + 1;

  console.log(freq1);
  console.log(freq2);

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) return false;
    if (freq2[key ** 2] !== freq1[key]) return false;
  }

  return true;
}

let result5 = same([1, 2, 3, 4, 5, 3, 3], [1, 9, 4, 25, 16, 9, 9]);
console.log(result5);

let result6 = same([1, 2, 3, 4, 5], [1, 4, 9, 16, 20]);
console.log(result6);

function validAnagram3(first, second) {
  if (first.length !== second.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of first) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of second) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  return true;
}

let result7 = validAnagram3('voodoo', 'doooov');
console.log(result7);
