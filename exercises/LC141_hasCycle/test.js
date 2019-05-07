const hasCycle = require("./index");
const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

test("returns false on an empty list.", () => {
  const l = new List();
  expect(hasCycle(l)).toEqual(false);
});

test("returns true for circular linked lists", () => {
  const l = new List();
  l.push("a");
  l.push("b");
  l.push("c");
  l.getLast().next = l.getFirst();

  expect(hasCycle(l.head)).toEqual(true);
});

test("returns true for circular linked lists that does not point to head.", () => {
  const l = new List();
  l.push("a");
  l.push("b");
  l.push("c");
  l.getLast().next = l.get(1);

  expect(hasCycle(l.head)).toEqual(true);
});

test("returns false for non-circular linked lists", () => {
  const l = new List();
  l.push("a");
  l.push("b");
  l.push("c");

  expect(hasCycle(l)).toEqual(false);
});
