const lengthOfLIS = require('./index');

test('lengthOfLIS([10,9,2,5,3,7,101,4]) returns 4 since LIS is [2,3,7,101]', () => {
	expect(lengthOfLIS([ 10, 9, 2, 5, 3, 7, 101, 4 ])).toEqual(4);
});

test('lengthOfLIS([0]) returns 1', () => {
	expect(lengthOfLIS([ 0 ])).toEqual(1);
});

test('lengthOfLIS([]) returns 0', () => {
	expect(lengthOfLIS([])).toEqual(0);
});
