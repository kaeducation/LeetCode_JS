const isAnagram = require("./index");

test("isAnagram('anagram', 'nagaram') returns true", () => {
  expect(isAnagram("anagram", "nagaram")).toEqual(true);
});

test("isAnagram('rat', 'car') returns false", () => {
  expect(isAnagram("rat", "car")).toEqual(false);
});

test("isAnagram('', '') returns true", () => {
  expect(isAnagram("", "")).toEqual(true);
});
