function fizzBuzzArray(num) {
  // create an empty array
  // create a for loop up to input num
  // if current num is divisible by 3 & 5 push FizzBuzz
  // else if current num is divisible by 5 push Buzz
  // else if current num is divisible by 3 push Fizz
  // else push current num

  let solution = [];

  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      // console.log('FizzBuzz');
      solution.push('FizzBuzz');
    } else if (i % 5 === 0) {
      // console.log('Buzz');
      solution.push('Buzz');
    } else if (i % 3 === 0) {
      // console.log('Fizz');
      solution.push('Fizz');
    } else {
      // console.log(i);
      solution.push(i);
    }
  }

  return solution;
}

module.exports = fizzBuzzArray;
