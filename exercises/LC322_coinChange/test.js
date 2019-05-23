const coinChange = require("./index");

test("[1, 2, 5], 11 should return 3 for 5 + 5 + 1", () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
});

test("[2, 5, 10, 1], 27 should return 4 for 10 + 10 + 5 + 2", () => {
  expect(coinChange([2, 5, 10, 1], 27)).toEqual(4);
});

test("[2], 3 should return -1 since change is not possible", () => {
  expect(coinChange([2], 3)).toEqual(-1);
});
