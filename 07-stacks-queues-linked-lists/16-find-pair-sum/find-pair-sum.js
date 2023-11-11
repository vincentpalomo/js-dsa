const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, target) {
  const seen = new DoublyLinkedList();

  for (const num of nums) {
    const difference = target - num;

    if (seen.contains(difference)) return [difference, num];

    seen.append(num);
  }

  return null;
}

module.exports = findPairSum;
