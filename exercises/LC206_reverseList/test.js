const reverseList = require("./index");

test("reverses the list", () => {
  const head = { val: "A", next: null };
  const bNode = { val: "B", next: null };
  head.next = bNode;

  expect(reverseList(head)).toEqual(bNode);
  expect(bNode.next).toEqual(head);
  expect(head.next).toEqual(null);
});
