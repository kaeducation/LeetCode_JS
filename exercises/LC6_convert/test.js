const convert = require("./index");

test("convert('PAYPALISHIRING', 3) returns 'PAHNAPLSIIGYIR'", () => {
  expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
});

test("convert('ABCDEFGH', 3) returns 'AEBDFHCG'", () => {
  expect(convert("ABCDEFGH", 3)).toEqual("AEBDFHCG");
});

test("convert('AB', 1) returns 'AB'", () => {
  expect(convert("AB", 1)).toEqual("AB");
});
