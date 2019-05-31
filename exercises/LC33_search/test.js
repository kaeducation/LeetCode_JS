const search = require("./index");

test("search([1], 1) returns 0", () => {
  expect(search([1], 1)).toEqual(0);
});

test("search([1, 3], 3) returns 1", () => {
  expect(search([1, 3], 3)).toEqual(1);
});

test("search([3, 1], 3) returns 0", () => {
  expect(search([3, 1], 3)).toEqual(0);
});

test("search([4,5,1,2,3], 1) returns 2", () => {
  expect(search([4, 5, 1, 2, 3], 1)).toEqual(2);
});

test("search([7,8,1,2,3,4,5,6], 2) returns 3", () => {
  expect(search([7, 8, 1, 2, 3, 4, 5, 6], 2)).toEqual(3);
});

test("search([4,5,6,7,0,1,2], 0) returns 4", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
});
