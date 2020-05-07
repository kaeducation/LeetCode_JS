const countComponents = require('./index');

test('works.', () => {
	expect(countComponents(5, [ [ 0, 1 ], [ 2, 1 ], [ 3, 4 ] ])).toEqual(2);
	expect(countComponents(5, [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ])).toEqual(1);
});
