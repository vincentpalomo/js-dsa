// function validateEmail(str) {
//   // put string into a new Set
//   // check if set if includes @ and .
//   // if true return true
//   // else return false

//   let isValid = new Set(str);
//   //   console.log(isValid);

//   if (isValid.has('@') && isValid.has('.') && str[0] != '@') {
//     return true;
//   } else {
//     return false;
//   }
// }

function validateEmail(str) {
  if (str.indexOf('@') === -1) {
    return false;
  }

  const [local, domain] = str.split('@');

  if (local.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split('.');

  if (domainExtension.length < 2 || domainExtension[1] < 2) {
    return false;
  }

  return true;
}

module.exports = validateEmail;
