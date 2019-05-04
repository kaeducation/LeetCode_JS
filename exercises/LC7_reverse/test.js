const reverse = require("./index");

test("reverse(123) returns 321", () => {
  expect(reverse(123)).toEqual(321);
});

test("reverse(120) returns 21", () => {
  expect(reverse(120)).toEqual(21);
});

test("reverse(-123) returns -321", () => {
  expect(reverse(-123)).toEqual(-321);
});

test("returns 0 on int overflow for positive number", () => {
  expect(reverse(2147483649)).toEqual(0);
});

test("returns 0 on int overflow for negative number", () => {
  expect(reverse(-2147483649)).toEqual(0);
});
