const s = "abc";
s.split(""); // ["a", "b", "c"]
s.split("").reverse(); // ["c", "b", "a"]

s.split("")
  .reverse()
  .join(""); // "cba"
