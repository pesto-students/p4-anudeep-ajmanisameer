var levelOrder = function (root) {
  if (root == null) return [];
  let queue = [], values = [];

  queue.push(root);
  // push the head
  while (queue.length > 0) {
    let level = [];
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift();

      // pushing the root
      level.push(node.val);

      // if left children, push
      if (node.left) {
        queue.push(node.left)
      };

      // if right children, push
      if (node.right) {
        queue.push(node.right)
      };
    }
    values.push(level);
  }
  return values;

};