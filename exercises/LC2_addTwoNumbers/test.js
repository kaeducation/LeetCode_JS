const addTwoNumbers = require("./index");

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const convertLLToArr = ll => {
  let arr = [];
  while (ll) {
    arr.push(ll.val);
    ll = ll.next;
  }
  return arr;
};

const convertIntToLL = int => {
  let list = null;
  int.split("").forEach(digit => {
    const head = new ListNode(Number(digit), list);
    list = head;
  });
  return list;
};

test("(2 -> 4 -> 3) + (5 -> 6 -> 4) = (7 -> 0 -> 8)", () => {
  // 342
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  // 465
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  // 342 + 465 = 807
  expect(convertLLToArr(addTwoNumbers(l1, l2))).toEqual([7, 0, 8]);
});

test("(9) + (6) = (5 -> 1)", () => {
  // 342
  const l1 = new ListNode(9);

  // 465
  const l2 = new ListNode(6);

  // 342 + 465 = 807
  expect(convertLLToArr(addTwoNumbers(l1, l2))).toEqual([5, 1]);
});

test("works for 10000000000000000000000001 + 465", () => {
  const l1 = convertIntToLL("10000000000000000000000001");
  const l2 = convertIntToLL("465");

  expect(convertLLToArr(addTwoNumbers(l1, l2))).toEqual([
    6,
    6,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ]);
});
