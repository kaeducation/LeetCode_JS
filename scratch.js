// "a   b   b   a"
//  0   1   2   3
//          |

var longestPalindrome = function(s) {
  let start = 0,
    max_length = 1;

  const expandAroundCenter = (low, high) => {
    while (low >= 0 && high < s.length && s[low] === s[high]) {
      if (high - low + 1 > max_length) {
        start = low;
        max_length = high - low + 1;
      }
      --low;
      ++high;
    }
  };

  [].map.call(s, (value, index) => {
    expandAroundCenter(index - 1, index);
    expandAroundCenter(index - 1, index + 1);
  });

  return s.slice(start, start + max_length);
};
