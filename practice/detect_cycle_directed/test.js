const hasCycle = require('./index');

test('returns false correctly', () => {
	expect(hasCycle(2, [ [ 0, 1 ] ])).toEqual(false);
	expect(hasCycle(3, [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ] ])).toEqual(false);
});

test('returns true correctly', () => {
	expect(hasCycle(1, [ [ 0, 0 ] ])).toEqual(true);
	expect(hasCycle(3, [ [ 0, 1 ], [ 2, 1 ], [ 2, 2 ] ])).toEqual(true);
	expect(hasCycle(4, [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 0 ], [ 2, 3 ], [ 3, 3 ] ])).toEqual(true);
});
