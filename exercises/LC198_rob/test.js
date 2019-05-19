const rob = require("./index");

test("rob([1,2,3,1]) returns 4", () => {
  expect(rob([1, 2, 3, 1])).toEqual(4);
});

test("rob([2,1,1,2]) returns 4", () => {
  expect(rob([2, 1, 1, 2])).toEqual(4);
});

test("rob([]) returns 0", () => {
  expect(rob([])).toEqual(0);
});
