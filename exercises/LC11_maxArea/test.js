const maxArea = require("./index");

test("works", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toEqual(17);
});
