const kthSmallest = require("./index");

const { BinarySearchTree } = require("../utility/utility");

test("works.", () => {
  const BST = new BinarySearchTree();
  BST.insert(8);
  BST.insert(3);
  BST.insert(10);
  BST.insert(1);
  BST.insert(6);
  BST.insert(14);

  expect(kthSmallest(BST.root, 1)).toEqual(1);
  expect(kthSmallest(BST.root, 2)).toEqual(3);
  expect(kthSmallest(BST.root, 3)).toEqual(6);
  expect(kthSmallest(BST.root, 4)).toEqual(8);
  expect(kthSmallest(BST.root, 5)).toEqual(10);
  expect(kthSmallest(BST.root, 6)).toEqual(14);
});
