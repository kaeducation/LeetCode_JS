const invertTree = require("./index");
const { BinarySearchTree } = require("../utility/utility");

test("Inverts tree", () => {
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
  const res = invertTree(BST.root);

  expect(res.val).toEqual(8);

  expect(res.left.val).toEqual(10);
  expect(res.right.val).toEqual(3);

  expect(res.left.left.val).toEqual(14);
  expect(res.right.right.val).toEqual(1);
});

test("Inverts empty tree", () => {
  const BST = new BinarySearchTree();
  const res = invertTree(BST.root);

  expect(res).toEqual(null);
});

test("Inverts tree with only one node", () => {
  const BST = new BinarySearchTree();
  BST.insert(8);
  const res = invertTree(BST.root);

  expect(res.val).toEqual(8);
});
