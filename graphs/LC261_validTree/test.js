const validTree = require('./index');

test('returns true correctly.', () => {
	expect(validTree(5, [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 4 ] ])).toEqual(true);
	expect(validTree(5, [ [ 1, 0 ], [ 0, 2 ], [ 0, 3 ], [ 3, 4 ] ])).toEqual(true);
});

test('Returns false due to seperate components', () => {
	expect(validTree(4, [ [ 0, 1 ], [ 2, 3 ] ])).toEqual(false);
});

test('Returns false due to cycle', () => {
	expect(validTree(5, [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 1, 3 ], [ 1, 4 ] ])).toEqual(false);
});
