function sumOfEvenSquares(numbers) {
  // if array lenght is 0 return 0
  // filter out the even numbers using % 2
  // use map to square each number from the new filtered array
  // use reduce to add up the sum of the new mapped array

  if (numbers.length === 0) {
    return 0;
  }

  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const squaredNumbers = evenNumbers.map((num) => num * num);
  const sumNumber = squaredNumbers.reduce((total, num) => total + num, 0);

  return sumNumber;
}

module.exports = sumOfEvenSquares;
