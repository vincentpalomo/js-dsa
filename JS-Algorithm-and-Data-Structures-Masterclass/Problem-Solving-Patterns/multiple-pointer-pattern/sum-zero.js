function sumZero(arr) {
  if (arr.length === 0) return null;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let result = sumZero([-3, -2, -1, 0, 2, 3, 4]);
console.log(result);
