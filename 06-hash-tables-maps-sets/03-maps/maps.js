const nameMap = new Map([
  [1, 'jinx'],
  [2, 'voodoo'],
  [3, 'worm'],
]);

const myFunction = () => {};
const myObject = {};

const map2 = new Map([
  ['name', 'jinx'],
  [1, 'number 1'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'my function'],
  [myObject, 'my object'],
]);

// get values
// console.log(nameMap.get(1));
// console.log(map2.get(myFunction));
// console.log(map2.get(myObject));

// set values
nameMap.set(4, 'kitti');
nameMap.set(5, 'pumpkin');

// check values
// console.log(nameMap.has(1));
// console.log(nameMap.has(10));

// removing values
nameMap.delete(1);
console.log(nameMap.has(1));

// get size
console.log(nameMap.size);

// iterating over a map
for (let [key, value] of nameMap) {
  console.log(key, value);
}

nameMap.forEach((value, key) => console.log(key, value));

// get keys
console.log(nameMap.keys());

// get values
console.log(nameMap.values());

// clear map
nameMap.clear();

console.log(nameMap.size);
