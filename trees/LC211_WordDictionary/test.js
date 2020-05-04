const WordDictionary = require("./index");

const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");

test("search returns false correctly.", () => {
  expect(wd.search("pad")).toEqual(false);
  expect(wd.search("ba")).toEqual(false);
});

test("search returns true correctly.", () => {
  expect(wd.search("bad")).toEqual(true);
  expect(wd.search(".ad")).toEqual(true);
  expect(wd.search("b..")).toEqual(true);
});
