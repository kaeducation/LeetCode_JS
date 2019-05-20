const uniquePaths = require("./index");

test("uniquePaths(1, 1) --> 1", () => {
  expect(uniquePaths(1, 1)).toEqual(1);
});

test("uniquePaths(7, 3) --> 28", () => {
  expect(uniquePaths(7, 3)).toEqual(28);
});

test("uniquePaths(6, 3) --> 21", () => {
  expect(uniquePaths(6, 3)).toEqual(21);
});
