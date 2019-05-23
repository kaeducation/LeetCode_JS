const exist = require("./index");

test("returns true correctly.", () => {
  expect(
    exist(
      [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
      "CESEEC"
    )
  ).toEqual(true);
  expect(
    exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB")
  ).toEqual(true);
});

test("returns false correctly.", () => {
  expect(
    exist(
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
      "ABCB"
    )
  ).toEqual(false);

  expect(exist([["a"]], "Ab")).toEqual(false);
});
