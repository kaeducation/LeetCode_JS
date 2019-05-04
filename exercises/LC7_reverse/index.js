// Given a 32-bit signed integer, reverse digits of an integer.
// For an int overflow, your code should just return 0.
// -------------------------
// reverse(123) --> 321
// reverse(120) --> 21
// reverse(-123) --> -321
// reverse(2147483649) --> 0
// reverse(-2147483649) --> 0

function reverse(x) {
  let abs = Math.abs(x);

  let reversed = 0;

  while (abs > 0) {
    const pop = abs % 10;
    abs = Math.floor(abs / 10);
    reversed = reversed * 10 + pop;
  }

  reversed = x < 0 ? reversed * -1 : reversed;
  if (reversed > 2 ** 31 - 1 || reversed < -1 * 2 ** 31) {
    return 0;
  }
  return reversed;
}

module.exports = reverse;
