function same(first, second) {
  // check the length of both input arrays, if not the same size return false
  // create two empty objects to store each input array values
  // fill the two objects with the input arrays
  // loop for in key of the first object
  // if the key squared is not in the second object return false
  // if the second object key squared is not equal to the first object key return false
  // return true if passes all test cases

  if (first.length !== second.length) return false;

  let firstSet = {};
  let secondSet = {};

  for (let val of first) firstSet[val] = (firstSet[val] || 0) + 1;
  for (let val of second) secondSet[val] = (secondSet[val] || 0) + 1;

  for (let key in firstSet) {
    if (!(key ** 2 in secondSet)) return false;
    if (secondSet[key ** 2] !== firstSet[key]) return false;
  }

  return true;
}

module.exports = same;
