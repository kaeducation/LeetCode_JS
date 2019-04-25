const romanToInt = require("./index");

test("works for 5 and lower.", () => {
  expect(romanToInt("II")).toEqual(2);
  expect(romanToInt("III")).toEqual(3);
  expect(romanToInt("IV")).toEqual(4);
  expect(romanToInt("V")).toEqual(5);
});

test("works for 10 and lower.", () => {
  expect(romanToInt("X")).toEqual(10);
  expect(romanToInt("IX")).toEqual(9);
});

test("works for 50 and lower.", () => {
  expect(romanToInt("XLV")).toEqual(45);
  expect(romanToInt("XLIV")).toEqual(44);
  expect(romanToInt("XXIX")).toEqual(29);
  expect(romanToInt("XVI")).toEqual(16);
  expect(romanToInt("XII")).toEqual(12);
});

test("works for 100 and lower.", () => {
  expect(romanToInt("XCIX")).toEqual(99);
  expect(romanToInt("XCVII")).toEqual(97);
  expect(romanToInt("LXXXIII")).toEqual(83);
  expect(romanToInt("LXVIII")).toEqual(68);
});

test("works for 500 and lower.", () => {
  expect(romanToInt("D")).toEqual(500);
  expect(romanToInt("CD")).toEqual(400);
});

test("works for 1000 and lower.", () => {
  expect(romanToInt("M")).toEqual(1000);
  expect(romanToInt("DCCCXCI")).toEqual(891);
  expect(romanToInt("DCCXCVIII")).toEqual(798);
  expect(romanToInt("DCXLIX")).toEqual(649);
  expect(romanToInt("DI")).toEqual(501);
});

test("works for 3999 and lower.", () => {
  expect(romanToInt("MMMCMXCIX")).toEqual(3999);
  expect(romanToInt("MMXIV")).toEqual(2014);
  expect(romanToInt("MXXIII")).toEqual(1023);
  expect(romanToInt("MVI")).toEqual(1006);
  expect(romanToInt("MIV")).toEqual(1004);
});
