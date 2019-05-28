const maxProduct = require("./index");

test("[-2, 3, -4] --> 24", () => {
  expect(maxProduct([-2, 3, -4])).toEqual(24);
});

test("[-4, -3, -2] --> 12", () => {
  expect(maxProduct([-2, -3, -4])).toEqual(12);
});

test("[-2, -3, 7] --> 42", () => {
  expect(maxProduct([-2, -3, 7])).toEqual(42);
});

test("[2, 3, -2, 4]  --> 6", () => {
  expect(maxProduct([2, 3, -2, 4])).toEqual(6);
});

test("[-1,-2,-9,-6]  --> 108", () => {
  expect(maxProduct([-1, -2, -9, -6])).toEqual(108);
});

test("[1,2,-1,-2,2,1,-2,1,4,-5,4]  --> 1280", () => {
  expect(maxProduct([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])).toEqual(1280);
});

test("[0, 2]  --> 2", () => {
  expect(maxProduct([0, 2])).toEqual(2);
});

test("[-2]  --> -2", () => {
  expect(maxProduct([-2])).toEqual(-2);
});
