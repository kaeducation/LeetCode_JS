const isPalindrome = require('./index');

test("'A man, a plan, a canal: Panama' returns true", () => {
	expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
});

test("'love' returns false", () => {
	expect(isPalindrome('love')).toEqual(false);
});

test("'8V8K;G;K;V;' returns false", () => {
	expect(isPalindrome('8V8K;G;K;V;')).toEqual(false);
});

test("'' returns true", () => {
	expect(isPalindrome('')).toEqual(true);
});

test("'_a__' returns true", () => {
	expect(isPalindrome('_a__')).toEqual(true);
});
