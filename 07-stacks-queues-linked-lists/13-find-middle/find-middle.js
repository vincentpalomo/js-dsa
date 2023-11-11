function findMiddle(list) {
  // create slow point
  // create fast point
  // while fast is not null and fast.next is not null
  // fast = fast next next
  // slow = slow next
  // return slow

  let slow = list.head;
  let fast = list.head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (fast === null) {
    return prev.next;
  } else {
    return slow;
  }
}

module.exports = findMiddle;
