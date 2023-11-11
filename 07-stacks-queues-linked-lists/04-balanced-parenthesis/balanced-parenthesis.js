const Stack = require('./stack');

function balancedParenthesis(str) {
  // create an empty opening parenthesis ( stack
  // loop thru str
  // if closing parenthesis ) is encountered pop stack
  // if stack is empty and encountering a closing parenthesis ) return false
  // return true

  const openParenthesis = new Stack();

  for (const parenthesis of str) {
    if (parenthesis === '(') {
      openParenthesis.push(parenthesis);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')') {
      if (openParenthesis.isEmpty()) return false;
      openParenthesis.pop();
    }
  }

  return openParenthesis.isEmpty();
}

module.exports = balancedParenthesis;
