const maxDepth = require("./index");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) {
        return;
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
}

test("Works for Binary Trees of with 1, 2, and 3 levels.", () => {
  const BST = new BinarySearchTree();
  BST.insert(8);
  expect(maxDepth(BST.root)).toEqual(1);
  BST.insert(3);
  BST.insert(10);
  expect(maxDepth(BST.root)).toEqual(2);
  BST.insert(14);
  //          8
  //        /   \
  //       3     10
  //      / \      \
  //               14
  expect(maxDepth(BST.root)).toEqual(3);
});

test("Works for Binary Tree with 0 levels", () => {
  const BST = new BinarySearchTree();
  expect(maxDepth(BST.root)).toEqual(0);
});
