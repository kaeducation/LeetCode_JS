const numIslands = require("./index");

test("returns 0 islands correctly.", () => {
  expect(
    numIslands([
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
    ])
  ).toEqual(0);
});

test("returns 1 island correctly.", () => {
  expect(
    numIslands([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
    ])
  ).toEqual(1);
});

test("returns 3 islands correctly.", () => {
  expect(
    numIslands([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"]
    ])
  ).toEqual(3);
});
