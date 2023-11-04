function areAllCharactersUnique(str) {
  if (str === '' || str.lenght === 1) return true;
  let seen = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!seen.has(str[i])) {
      seen.add(str[i]);
    } else {
      return false;
    }
  }

  return true;
}

module.exports = areAllCharactersUnique;
