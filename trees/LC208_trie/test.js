const Trie = require("./index");

test("insert() and search() work.", () => {
  const trie = new Trie();
  trie.insert("apple");

  expect(trie.search("apple")).toEqual(true);
  expect(trie.search("app")).toEqual(false);

  trie.insert("app");
  expect(trie.search("app")).toEqual(true);
});

test("startsWith() works properly", () => {
  const trie = new Trie();
  trie.insert("apple");

  expect(trie.startsWith("app")).toEqual(true);
  expect(trie.startsWith("apl")).toEqual(false);
});
