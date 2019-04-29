var letterCombinations = function(digits) {
  const hashMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  if (!digits) return [];

  let combinations = [...hashMap[digits[0]]];

  for (let i = 1; i < digits.length; i++) {
    const digit = digits[i];
    const tempCombinations = [];

    hashMap[digit].forEach(letter => {
      combinations.forEach(combination => {
        tempCombinations.push(combination + letter);
      });
    });

    combinations = tempCombinations;
  }

  return combinations;
};
