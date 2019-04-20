const myAtoi = require("./index");

test("myAtoi('42') returns 42", () => {
  expect(myAtoi("42")).toEqual(42);
});

test("myAtoi('  0000000000012345678') returns 12345678", () => {
  expect(myAtoi("  0000000000012345678")).toEqual(12345678);
});

test("myAtoi('+1') returns 1", () => {
  expect(myAtoi("+1")).toEqual(1);
});

test("myAtoi('   -42') returns -42", () => {
  expect(myAtoi("   -42")).toEqual(-42);
});

test("myAtoi('4193 with words') returns 4193", () => {
  expect(myAtoi("4193 with words")).toEqual(4193);
});

test("myAtoi('words and 987') returns 0", () => {
  expect(myAtoi("words and 987")).toEqual(0);
});

test("myAtoi('3.14159') returns 3", () => {
  expect(myAtoi("3.14159")).toEqual(3);
});

test("myAtoi('2147483648') returns 2147483647", () => {
  expect(myAtoi("2147483648")).toEqual(2147483647);
});

test("myAtoi('-91283472332') returns -2147483648", () => {
  expect(myAtoi("-91283472332")).toEqual(-2147483648);
});
