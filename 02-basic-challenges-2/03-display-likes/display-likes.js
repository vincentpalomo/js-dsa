function displayLikes(arr) {
  // if array length = 0 return 'no on likes this'
  // if array length = 1 return '{name} likes this'
  // if array length = 2 return '{name1} and {name2} likes this'
  // if array length = 3 return '{name1}, {name2} and {name3} like this'
  // if array length < 3 return '{name1}, {name2}, and {x} others like this'
  // x is the remainder of the array (array.length - 2 = x)

  if (arr.length === 0) {
    return 'no one likes this';
  } else if (arr.length === 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else if (arr.length > 3) {
    let x = arr.length - 2;
    return `${arr[0]}, ${arr[1]} and ${x} others like this`;
  }
}

// const result = displayLikes(['jinx', 'voodoo', 'worm', 'kitty', 'pumpkin']);
// console.log(result);

module.exports = displayLikes;
