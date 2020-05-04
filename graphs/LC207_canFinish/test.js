const canFinish = require('./index');

test('returns false correctly.', () => {
	expect(canFinish(1, [ [ 0, 0 ] ])).toEqual(false);
	expect(canFinish(3, [ [ 0, 1 ], [ 2, 1 ], [ 2, 2 ] ])).toEqual(false);
	expect(canFinish(4, [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 0 ], [ 2, 3 ], [ 3, 3 ] ])).toEqual(false);
});

test('returns true correctly.', () => {
	expect(canFinish(2, [ [ 0, 1 ] ])).toEqual(true);
	expect(canFinish(4, [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ] ])).toEqual(true);
});
