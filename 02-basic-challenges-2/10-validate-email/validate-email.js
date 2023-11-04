function validateEmail(str) {
  // put string into a new Set
  // check if set if includes @ and .
  // if true return true
  // else return false

  let isValid = new Set(str);
  console.log(isValid);

  if (isValid.has('@') && isValid.has('.') && str[0] != '@') {
    return true;
  } else {
    return false;
  }
}

module.exports = validateEmail;
