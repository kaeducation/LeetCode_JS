const isValidSerialization = require("./index");

test("Returns true correctly.", () => {
  expect(isValidSerialization("9,#,92,#,#")).toEqual(true);
});

test("Returns false correctly.", () => {
  expect(isValidSerialization("#,#,3,5,#")).toEqual(false);
});
