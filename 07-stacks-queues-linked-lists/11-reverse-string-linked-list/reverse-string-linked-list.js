const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  // create a char placeholder LinkedList
  // create a reversed empty string
  // loop thru the string add each element to the linked list
  // loop thru the linked list and build the reverse string

  const list = new LinkedList();
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str.charAt(i);
    list.add(char);
  }

  let current = list.head;

  while (current !== null) {
    reversed += current.data;
    current = current.next;
  }

  return reversed;
}

module.exports = reverseStringLinkedList;
