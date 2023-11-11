class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  // if (!root) return 0;

  // const stack = [{ node: root, depth: 1 }];

  // let maxDepth = 0;

  // while (stack.length > 0) {
  //   const { node, depth } = stack.pop();

  //   if (depth > maxDepth) {
  //     maxDepth = depth;
  //   }

  //   if (node.right) stack.push({ node: node.right, depth: depth + 1 });

  //   if (node.left) stack.push({ node: node.left, depth: depth + 1 });
  // }

  // return maxDepth;

  if (!root) return [];

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

module.exports = {
  maxDepth,
  Node,
};
