function sumOfEvenSquares(numbers) {
  // if array lenght is 0 return 0
  // filter out the even numbers using % 2
  // use map to square each number from the new filtered array
  // use reduce to add up the sum of the new mapped array

  if (numbers.length === 0) {
    return 0;
  }

  // const evenNumbers = numbers.filter((num) => num % 2 === 0);
  // const squaredNumbers = evenNumbers.map((num) => num * num);
  // const sumNumber = squaredNumbers.reduce((total, num) => total + num, 0);

  // you can format filter and map together
  // const evenSquares = numbers.filter((num) => num % 2 === 0).map((num) => num ** 2);

  // return evenSquares.reduce((sum, square) => sum + square, 0);

  // you can even return with all high order methods

  return numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
}

module.exports = sumOfEvenSquares;
