const levelOrder = root => {
  let res = [];

  const helper = (node, depth) => {
    if (!node) {
      return;
    }

    if (!res[depth]) {
      res.push([]);
    }

    res[depth].push(node.val);
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  };

  helper(root, 0);
  return res;
};
