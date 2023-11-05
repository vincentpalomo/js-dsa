const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log('Doubled: ', doubleNumbers);

const multipleOfFive = numbers.map((num) => {
  return num * 5;
});

console.log('Multiple of five: ', multipleOfFive);

const implicitReturn = numbers.map((num) => num * 10);

console.log('implicit', implicitReturn);
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log('Even Numbers: ', evenNumbers);

const oddNumbers = numbers.filter((num) => {
  return num % 2 === 1;
});

console.log('Odd Numbers: ', oddNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0); // 0 is the starting of the accumulator (total)

console.log('Sum: ', sum);

const numbers2 = [6, 7, 8, 9, 10];

const sum2 = numbers2.reduce((total, num) => {
  return total + num;
}, 0);

console.log('Sum2: ', sum2);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach((num) => {
  console.log('forEach: ', num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const findNumber = numbers.find((num) => num > 2);

console.log('findNumber: ', findNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const hasEvenNumber = numbers.some((num) => num % 2 === 0);

console.log('hasEvenNumber: ', hasEvenNumber);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const allNumsGreaterThanZero = numbers.every((num) => num > 0);

console.log('allNumsGreaterThanZero: ', allNumsGreaterThanZero);
