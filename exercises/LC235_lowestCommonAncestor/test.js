const lowestCommonAncestor = require("./index");

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
  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.val) {
        return current;
      }
      current = value < current.val ? current.left : current.right;
    }
    return false;
  }
}

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
