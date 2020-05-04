const longestConsecutive = require('./index');

test('longestConsecutive works', () => {
	expect(longestConsecutive([ 100, 4, 200, 1, 3, 2 ])).toEqual(4);
	expect(longestConsecutive([ 100, 4, 200, 1, 2 ])).toEqual(2);
	expect(longestConsecutive([ 0, -1 ])).toEqual(2);
});
