const isSameTree = require("./index");

class Node {
  constructor(value) {
    this.val = value;
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
      if (value === current.val) {
        return;
      }
      if (value < current.val) {
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

test("returns true for same trees", () => {
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

  const BST2 = new BinarySearchTree();
  BST2.insert(8);
  BST2.insert(3);
  BST2.insert(10);
  BST2.insert(1);
  BST2.insert(6);
  BST2.insert(14);
  expect(isSameTree(BST.root, BST2.root)).toEqual(true);
});

test("returns false for different trees", () => {
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

  const BST2 = new BinarySearchTree();
  BST2.insert(8);
  BST2.insert(3);
  BST2.insert(10);
  BST2.insert(1);
  BST2.insert(6);
  BST2.insert(144);
  expect(isSameTree(BST.root, BST2.root)).toEqual(false);
});
