const productExceptSelf = require("./index");

test("productExceptSelf([1,2,3,4]) returns [24, 12, 8, 6]", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test("productExceptSelf([] returns [])", () => {
  expect(productExceptSelf([])).toEqual([]);
});
