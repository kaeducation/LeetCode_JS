const isSubtree = require("./index");

const { Node, BinarySearchTree } = require("../utility/utility");

test("Returns true correctly.", () => {
  const bst1 = new BinarySearchTree();
  bst1.insert(8);
  bst1.insert(3);
  bst1.insert(10);
  bst1.insert(1);
  bst1.insert(6);
  bst1.insert(14);
  //         8
  //       /   \
  //      3     10
  //     / \      \
  //    1   6      14

  const bst2 = new BinarySearchTree();
  bst2.insert(3);
  bst2.insert(1);
  bst2.insert(6);
  //       3
  //      / \
  //     1   6

  expect(isSubtree(bst1.root, bst2.root)).toEqual(true);
  expect(isSubtree(bst1.root, new Node(1))).toEqual(true);
  expect(isSubtree(bst1.root, new Node(14))).toEqual(true);
});

test("Returns false correctly.", () => {
  const bst1 = new BinarySearchTree();
  bst1.insert(8);
  bst1.insert(3);
  bst1.insert(10);
  bst1.insert(1);
  bst1.insert(6);
  bst1.insert(14);
  bst1.insert(7);
  //         8
  //       /   \
  //      3     10
  //     / \      \
  //    1   6      14
  //         \
  //          7

  const bst2 = new BinarySearchTree();
  bst2.insert(3);
  bst2.insert(1);
  bst2.insert(6);
  //       3
  //      / \
  //     1   6

  expect(isSubtree(bst1.root, bst2.root)).toEqual(false);
  expect(isSubtree(bst1.root, new Node(13))).toEqual(false);
});
