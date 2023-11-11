const { LinkedList } = require('./linked-list');

const list = new LinkedList();

list.add(100);
list.add(200);
list.add(300);
list.add(400);

console.log(list.get(2));
console.log(list.get(0));

// list.printAll();
