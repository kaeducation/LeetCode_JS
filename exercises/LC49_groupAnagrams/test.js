const groupAnagrams = require("./index");

test("['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] returns 3 groups of Anagrams", () => {
  let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]).sort(
    (a, b) => b.length - a.length
  );

  res.forEach(subArr => subArr.sort());

  expect(res.length).toEqual(3);

  const subArr1 = res[0];
  expect(subArr1).toEqual(["ate", "eat", "tea"]);
  const subArr2 = res[1];
  expect(subArr2).toEqual(["nat", "tan"]);
  const subArr3 = res[2];
  expect(subArr3).toEqual(["bat"]);
});
