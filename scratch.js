function myAtoi(str) {
  str = str.trim();
  const digits = "0123456789";
  const hashMap = digits.split("").reduce((obj, next, i) => {
    obj[next] = i;
    return obj;
  }, {});
  let sign = 1;

  if (str[0] === "-") {
    sign = -1;
    str = str.slice(1);
  } else if (str[0] === "+") {
    str = str.slice(1);
  } else if (hashMap[str[0]] === undefined) {
    return 0;
  }

  let res = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hashMap[char] !== undefined) {
      res = res * 10 + hashMap[char];
    } else {
      break;
    }
  }

  res = res > 2147483648 ? 2147483648 : res;
  console.log("reached");
  return sign * res;
}

myAtoi("  0000000000012345678");
