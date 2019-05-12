const maxDepth = root => {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let count = 0;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = size; i > 0; i--) {
      const cur = queue.pop();
      if (cur.left) {
        queue.unshift(cur.left);
      }
      if (cur.right) {
        queue.unshift(cur.right);
      }
    }
    count++;
  }
  return count;
};
