const longestCommonPrefix = require("./index");

test("longestCommonPrefix([]) returns ''", () => {
  expect(longestCommonPrefix([])).toEqual("");
});

test("longestCommonPrefix(['flower', 'flow', 'flight']) returns 'fl'", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
});

test("longestCommonPrefix(['c', 'acc', 'ccc']) returns ''", () => {
  expect(longestCommonPrefix(["c", "acc", "ccc"])).toEqual("");
});
