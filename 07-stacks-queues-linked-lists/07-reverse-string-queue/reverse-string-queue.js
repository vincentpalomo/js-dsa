const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  // create a queue variable
  // create a reversed variable
  // for loop the string
  // add each letter to the queue
  // dequeue each letter into a string
  // return reversed
  const characters = new Queue();
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    characters.enqueue(str[i]);
  }
  console.log(characters);

  while (!characters.isEmpty()) {
    reversed += characters.dequeue();
  }

  return reversed;
};

module.exports = reverseStringWithQueue;
