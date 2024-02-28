let head; // head of list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  };

  function push(data) {
    let newNode = new Node(data);

    newNode.next =  head;
    
    head = newNode;
  };
};

function detectLoop(head) {
  let seen = new Set();

  while (head != null) {
    if (seen.has(head)) {
      return true;
    }

    seen.add(head);

    head = head.next;
  }

  return false;
};
