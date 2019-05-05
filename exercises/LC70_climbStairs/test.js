const climbStairs = require("./index");

test("Returns 1 way to climb 1 stair", () => {
  expect(climbStairs(1)).toEqual(1);
});

test("Returns 2 ways to climb 2 stairs", () => {
  expect(climbStairs(2)).toEqual(2);
});

test("Returns 3 ways to climb 3 stairs", () => {
  expect(climbStairs(3)).toEqual(3);
});

test("Returns 5 ways to climb 4 stairs", () => {
  expect(climbStairs(4)).toEqual(5);
});
