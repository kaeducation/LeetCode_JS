var romanToInt = function(s) {
  let sum = 0;

  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  if (s.indexOf("IV")) sum -= 2;
  if (s.indexOf("IX")) sum -= 2;
  if (s.indexOf("XL")) sum -= 20;
  if (s.indexOf("XC")) sum -= 20;
  if (s.indexOf("CD")) sum -= 200;
  if (s.indexOf("CM")) sum -= 200;

  s.split("").forEach(char => {
    sum += romanToIntMap[char];
  });

  return sum;
};
