const mergeTwoLists = require("./index");

class Node {
  constructor(val, next = null) {
    this.val = val;
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
  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }
  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }
    this.getLast().next = new Node(data);
    this.length++;
  }
}

const convertLLToArr = head => {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

test("[1,3], [2,4,6,8] returns head of [1,2,3,4,6,8]", () => {
  const odds = new LinkedList();
  odds.push(1);
  odds.push(3);

  const evens = new LinkedList();
  evens.push(2);
  evens.push(4);
  evens.push(6);
  evens.push(8);

  const resList = convertLLToArr(mergeTwoLists(odds.head, evens.head));

  expect(resList).toEqual([1, 2, 3, 4, 6, 8]);
});

test("[1,3], [] returns head of [1,3]", () => {
  const odds = new LinkedList();
  odds.push(1);
  odds.push(3);

  const evens = new LinkedList();

  const resList = convertLLToArr(mergeTwoLists(odds.head, evens.head));

  expect(resList).toEqual([1, 3]);
});

test("[], [] returns head of []", () => {
  expect(mergeTwoLists(null, null)).toEqual(null);
});
