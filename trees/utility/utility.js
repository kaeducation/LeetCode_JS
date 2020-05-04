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

module.exports = { Node, BinarySearchTree };
