const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  // create a new queue first in first out can be for the string going forward
  // create a new stack last in first out can be used to reverse
  // remove all non alphanumberic characters from the string
  // loop thru input str maybe can use for of
  // add each char to queue and stack
  // if queue element === to stack element
  // return true
  // else false

  const forward = new Queue();
  const reversed = new Stack();

  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < formattedStr.length; i++) {
    const element = formattedStr.charAt(i);
    forward.enqueue(element);
    reversed.push(element);
  }

  while (!forward.isEmpty()) {
    if (forward.dequeue() !== reversed.pop()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindromeQueueStack;
