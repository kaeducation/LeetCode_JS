const setZeroes = require("./index");

test("modifies input matrix.", () => {
  const inputMatrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  setZeroes(inputMatrix);
  expect(inputMatrix).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
});

test("works", () => {
  let inputMatrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  setZeroes(inputMatrix);
  expect(inputMatrix).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);

  inputMatrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
  setZeroes(inputMatrix);
  expect(inputMatrix).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
});

test("one-row matrix", () => {
  let inputMatrix = [[1, 0]];
  setZeroes(inputMatrix);
  expect(inputMatrix).toEqual([[0, 0]]);
});

test("one-column matrix", () => {
  inputMatrix = [[0], [1]];
  setZeroes(inputMatrix);
  expect(inputMatrix).toEqual([[0], [0]]);
});
