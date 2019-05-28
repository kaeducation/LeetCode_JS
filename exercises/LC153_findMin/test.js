const findMin = require("./index");

test("[1] returns 1", () => {
  expect(findMin([1])).toEqual(1);
});

test("[1, 2] returns 1", () => {
  expect(findMin([1, 2])).toEqual(1);
});

test("[4,5,6,7,0,1,2] returns 0", () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
});

test("[5, 1, 2, 3, 4] returns 1", () => {
  expect(findMin([5, 1, 2, 3, 4])).toEqual(1);
});

test("[2,3,4,5,6,1] returns 1", () => {
  expect(findMin([2, 3, 4, 5, 6, 1])).toEqual(1);
});
