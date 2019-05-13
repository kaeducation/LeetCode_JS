const invertTree = require("./index");

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
  invertTree(BST.root);

  expect(BST.root.val).toEqual(8);

  expect(BST.root.left.val).toEqual(10);
  expect(BST.root.right.val).toEqual(3);

  expect(BST.root.left.left.val).toEqual(14);
  expect(BST.root.right.right.val).toEqual(1);
});

test("Inverts empty tree", () => {
  const BST = new BinarySearchTree();
  invertTree(BST.root);

  expect(BST.root).toEqual(null);
});

test("Inverts tree with only one node", () => {
  const BST = new BinarySearchTree();
  BST.insert(8);
  invertTree(BST.root);

  expect(BST.root.val).toEqual(8);
});
