const hasCycle = require("./index");

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
  shift() {
    if (this.head) {
      this.length--;
    }
    const originalHead = this.head;
    this.head = this.head ? this.head.next : null;
    return originalHead;
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
}

test("returns false on an empty list.", () => {
  const l = new LinkedList();
  expect(hasCycle(l)).toEqual(false);
});

test("returns true for circular linked lists", () => {
  const l = new LinkedList();
  l.push("a");
  l.push("b");
  l.push("c");
  l.getLast().next = l.getFirst();

  expect(hasCycle(l.head)).toEqual(true);
});

test("returns true for circular linked lists that does not point to head.", () => {
  const l = new LinkedList();
  l.push("a");
  l.push("b");
  l.push("c");
  l.getLast().next = l.get(1);

  expect(hasCycle(l.head)).toEqual(true);
});

test("returns false for non-circular linked lists", () => {
  const l = new LinkedList();
  l.push("a");
  l.push("b");
  l.push("c");

  expect(hasCycle(l)).toEqual(false);
});
