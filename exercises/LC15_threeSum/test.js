const threeSum = require("./index");

test("threeSum([2, 0, 1, -1]) returns [[-1, 0, 1]]", () => {
  expect(threeSum([2, 0, 1, -1])[0].sort((a, b) => a - b)).toEqual([-1, 0, 1]);
});

describe("No duplicate results returned", () => {
  test("threeSum([0, 0, 0, 0]) returns [[0,0,0]]", () => {
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  test("threeSum([-1, 0, 1, 2, -1, -4]) returns [ [-1, 0, 1], [-1, -1, 2] ]", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4]).length).toEqual(2);

    const intial = threeSum([-1, 0, 1, 2, -1, -4]);
    const res = [...intial[0], ...intial[1]].sort((a, b) => a - b);
    expect(res).toEqual([-1, -1, -1, 0, 1, 2]);
  });
});
