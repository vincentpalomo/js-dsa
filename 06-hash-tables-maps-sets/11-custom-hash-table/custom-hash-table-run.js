const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

myHashTable.set('John', '555-234-3455');
myHashTable.set('James', '555-349-3948');
myHashTable.set('Sara', '555-469-3334');

myHashTable.remove('James');

// console.log(myHashTable.get('James'));
// console.log(myHashTable.has('John'));

myHashTable.clear();

myHashTable.printTable();

// console.log(result);
