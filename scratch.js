const invertTree = root => {
  const helper = root => {
    if (!root) return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    helper(root.left);
    helper(root.right);
  };

  helper(root);
  return root;
};
