const lowestCommonAncestor = require("./index");
const { BinarySearchTree } = require("../utility/utility");

test("Returns lowest common ancestor.", () => {
  const BST = new BinarySearchTree();
  BST.insert(8);
  BST.insert(3);
  BST.insert(10);
  BST.insert(1);
  BST.insert(6);
  BST.insert(14);
  //          8
  //        /   \
  //       3     10
  //      / \      \
  //     1   6     14
  const node3 = BST.find(3);
  const node10 = BST.find(10);
  const node14 = BST.find(14);

  expect(lowestCommonAncestor(BST.root, node3, node10)).toEqual(BST.root);
  expect(lowestCommonAncestor(BST.root, node10, node14)).toEqual(node10);
});
