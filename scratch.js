const longestCommonPrefix = function(strs) {
  let prefix = strs.length ? strs[0] : "";

  strs.forEach(str => {
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  });

  return prefix;
};
