const isValid = require("./index");

test("'(', ')', '{', '}', '[', ']' should return false", () => {
  expect(isValid("(")).toEqual(false);
  expect(isValid(")")).toEqual(false);
  expect(isValid("{")).toEqual(false);
  expect(isValid("}")).toEqual(false);
  expect(isValid("[")).toEqual(false);
  expect(isValid("]")).toEqual(false);
});

test("'(]', '([)]' should return false", () => {
  expect(isValid("(]")).toEqual(false);
  expect(isValid("([)]")).toEqual(false);
});

test("'()', '()[]{}', '{[]}' should return true", () => {
  expect(isValid("()")).toEqual(true);
  expect(isValid("()[]{}")).toEqual(true);
  expect(isValid("{[]}")).toEqual(true);
});
