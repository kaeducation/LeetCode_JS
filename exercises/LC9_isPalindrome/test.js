const isPalindrome = require("./index");

test("works for positive numbers", () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(42)).toEqual(false);
});

test("works for negative numbers", () => {
  expect(isPalindrome(-42)).toEqual(false);
});
