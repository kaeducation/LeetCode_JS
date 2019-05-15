const eraseOverlapIntervals = require("./index");

test("eraseOverlapIntervals([]) and eraseOverlapIntervals([[1,2]]) return 0", () => {
  expect(eraseOverlapIntervals([[1, 2]])).toEqual(0);
  expect(eraseOverlapIntervals([])).toEqual(0);
});

test("eraseOverlapIntervals([[0,2],[1,3],[2,4],[3,5],[4,6]] ) returns 2", () => {
  expect(
    eraseOverlapIntervals([[0, 2], [1, 3], [2, 4], [3, 5], [4, 6]])
  ).toEqual(2);
});

test("eraseOverlapIntervals([[1, 100], [1, 2], [3, 4], [2, 3]] ) returns 1", () => {
  expect(eraseOverlapIntervals([[1, 100], [1, 2], [3, 4], [2, 3]])).toEqual(1);
});
