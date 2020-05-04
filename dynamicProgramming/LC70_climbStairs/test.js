const climbStairs = require('./index');

test('works.', () => {
	expect(climbStairs(1)).toEqual(1);
	expect(climbStairs(2)).toEqual(2);
	expect(climbStairs(3)).toEqual(3);
	expect(climbStairs(4)).toEqual(5);
});
