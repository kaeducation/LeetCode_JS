const maxProduct = require("./index");

test("[-2, 3, -4] --> 24", () => {
  expect(maxProduct([-2, 3, -4])).toEqual(24);
});

test("[-4, -3, -2] --> 12", () => {
  expect(maxProduct([-2, -3, -4])).toEqual(12);
});

test("[2, 3, -2, 4]  --> 6", () => {
  expect(maxProduct([2, 3, -2, 4])).toEqual(6);
});

test("[-2]  --> -2", () => {
  expect(maxProduct([-2])).toEqual(-2);
});
