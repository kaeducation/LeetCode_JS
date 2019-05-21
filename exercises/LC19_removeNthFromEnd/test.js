const removeNthFromEnd = require("./index");

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

test("removeNthFromEnd([5,4,3,2,1], 2) becomes [5,4,3,1]", () => {
  const startingLL = convertIntToLL("12345");
  expect(convertLLToArr(removeNthFromEnd(startingLL, 2))).toEqual([5, 4, 3, 1]);
});

test("removeNthFromEnd([1], 1) becomes []", () => {
  expect(removeNthFromEnd({ val: "meow", next: null }, 1)).toEqual(null);
});
