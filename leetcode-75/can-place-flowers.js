// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.legnth - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
    // console.log(flowerbed);
  }
  return n <= 0;
};

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;

let flowerbed2 = [1, 0, 0, 0, 1];
let n2 = 2;

let result = canPlaceFlowers(flowerbed, n);
console.log(result);

let result2 = canPlaceFlowers(flowerbed2, n2);
console.log(result2);

const cpfbrute = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      console.log('false', i);
    }
    if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
      console.log('true', flowerbed);
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
};

let bruteresult = cpfbrute(flowerbed, n);
console.log(bruteresult);
