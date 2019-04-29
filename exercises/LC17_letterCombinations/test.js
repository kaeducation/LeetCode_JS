const letterCombinations = require("./index");

test("letterCombinations('23') returns ['ad','ae','af','bd','be','bf','cd','ce','cf']", () => {
  expect(letterCombinations("23").sort()).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf"
  ]);
});

test("letterCombinations('234') returns correct results.", () => {
  expect(letterCombinations("234").sort()).toEqual([
    "adg",
    "adh",
    "adi",
    "aeg",
    "aeh",
    "aei",
    "afg",
    "afh",
    "afi",
    "bdg",
    "bdh",
    "bdi",
    "beg",
    "beh",
    "bei",
    "bfg",
    "bfh",
    "bfi",
    "cdg",
    "cdh",
    "cdi",
    "ceg",
    "ceh",
    "cei",
    "cfg",
    "cfh",
    "cfi"
  ]);
});
