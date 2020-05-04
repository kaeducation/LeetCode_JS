const hasCycle = require('./index');

test('returns false correctly', () => {
	expect(hasCycle(2, [ [ 0, 1 ] ])).toEqual(false);
	expect(hasCycle(3, [ [ 1, 0 ], [ 1, 2 ] ])).toEqual(false);
});

test('returns true correctly', () => {
	expect(hasCycle(4, [ [ 1, 0 ], [ 0, 3 ], [ 1, 2 ], [ 2, 3 ] ])).toEqual(true);
	expect(hasCycle(5, [ [ 1, 0 ], [ 0, 2 ], [ 2, 1 ], [ 0, 3 ], [ 3, 4 ] ])).toEqual(true);
});
