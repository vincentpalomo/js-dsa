// creating an empty set
const nameSet = new Set(['jinx', 'voodoo', 'worm']);

// add to set
nameSet.add('kitti');
nameSet.add('pumpkin');

// check for values
console.log(nameSet.has('jinx'));
console.log(nameSet.has('mrdoo'));

// get size
console.log(nameSet.size);

// get values
console.log(nameSet.values());

// iterate through a set
for (const name of nameSet) {
  console.log(name);
}

// convert to array
const array = [...nameSet];
console.log(array);

// clear set
nameSet.clear();
console.log(nameSet.size);
