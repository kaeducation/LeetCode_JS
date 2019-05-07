class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  unshift(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
    this.length = 0;
  }
  shift() {
    if (this.head) {
      this.length--;
    }
    const originalHead = this.head;
    this.head = this.head ? this.head.next : null;
    return originalHead;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      return this.shift();
    }
    let node = this.head;
    const last = this.getLast();
    while (node.next !== last) {
      node = node.next;
    }
    node.next = null;
    this.length--;
    return last;
  }
  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }
    this.getLast().next = new Node(data);
    this.length++;
  }
  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let node = this.head;
    let counter = 0;
    while (index !== counter) {
      node = node.next;
      counter++;
    }
    return node;
  }
  set(index, data) {
    if (!this.get(index)) {
      return false;
    }
    this.get(index).data = data;
    return true;
  }
  remove(index) {
    if (!this.get(index)) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    const removed = this.get(index);
    this.get(index - 1).next = removed.next;
    this.length--;
    return removed;
  }
  insert(index, data) {
    if (index > this.length || index < 0) {
      return false;
    }
    if (index === 0) {
      this.unshift(data);
      return true;
    }
    this.get(index - 1).next = new Node(data, this.get(index));
    this.length++;
    return true;
  }
  reverse() {
    // for (let i = 0; i < this.length; i++) {
    //   this.insert(i, this.pop().data);
    // }

    // let prev = null;
    // let current = this.head;
    // while (current) {
    //   const temp = current.next;
    //   current.next = prev;
    //   prev = current;
    //   current = temp;
    // }
    // this.head = prev;

    let prev = null;
    let current = this.head;
    const size = this.length;
    for (let i = 0; i < size; i++) {
      const temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = prev;
  }
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
