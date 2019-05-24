const canJump = require("./index");

test("[2, 3, 1, 1, 4] returns true", () => {
  expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
});

test("[3] returns true", () => {
  expect(canJump([3])).toEqual(true);
});

test("[3,2,1,0,4] returns false", () => {
  expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
});
