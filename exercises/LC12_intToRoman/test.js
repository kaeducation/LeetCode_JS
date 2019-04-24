const intToRoman = require("./index");

test("works for 5 and lower.", () => {
  expect(intToRoman(2)).toEqual("II");
  expect(intToRoman(3)).toEqual("III");
  expect(intToRoman(4)).toEqual("IV");
  expect(intToRoman(5)).toEqual("V");
});

test("works for 10 and lower.", () => {
  expect(intToRoman(10)).toEqual("X");
  expect(intToRoman(9)).toEqual("IX");
});

test("works for 50 and lower.", () => {
  expect(intToRoman(45)).toEqual("XLV");
  expect(intToRoman(44)).toEqual("XLIV");
  expect(intToRoman(29)).toEqual("XXIX");
  expect(intToRoman(16)).toEqual("XVI");
  expect(intToRoman(12)).toEqual("XII");
});

test("works for 100 and lower.", () => {
  expect(intToRoman(99)).toEqual("XCIX");
  expect(intToRoman(97)).toEqual("XCVII");
  expect(intToRoman(83)).toEqual("LXXXIII");
  expect(intToRoman(68)).toEqual("LXVIII");
});

test("works for 500 and lower.", () => {
  expect(intToRoman(500)).toEqual("D");
  expect(intToRoman(400)).toEqual("CD");
});

test("works for 1000 and lower.", () => {
  expect(intToRoman(1000)).toEqual("M");
  expect(intToRoman(891)).toEqual("DCCCXCI");
  expect(intToRoman(798)).toEqual("DCCXCVIII");
  expect(intToRoman(649)).toEqual("DCXLIX");
  expect(intToRoman(501)).toEqual("DI");
});

test("works for 3999 and lower.", () => {
  expect(intToRoman(3999)).toEqual("MMMCMXCIX");
  expect(intToRoman(2014)).toEqual("MMXIV");
  expect(intToRoman(1023)).toEqual("MXXIII");
  expect(intToRoman(1006)).toEqual("MVI");
  expect(intToRoman(1004)).toEqual("MIV");
});
