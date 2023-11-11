const Stack = require('./stack');

function reverseStringStack(str) {
  // create an empty stack
  // create a reverse empty string
  // loop thru the str
  // push the string into the stack
  // pop each element out of the stack
  // return reverse str

  const stack = new Stack();
  let reversed = '';

  for (const char of str) {
    stack.push(char);
  }

  //   for (let i = 0; i < str.length; i++) {
  //     let charPop = stack.pop();
  //     reversed = reversed + charPop;
  //   }

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

module.exports = reverseStringStack;
