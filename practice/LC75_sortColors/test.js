const sortColors = require('./index');

test('[2, 0, 2, 1, 1, 0] becomes [0, 0, 1, 1, 2, 2]', () => {
	const input = [ 2, 0, 2, 1, 1, 0 ];
	sortColors(input);
	expect(input).toEqual([ 0, 0, 1, 1, 2, 2 ]);
});

test('[2] becomes [2]', () => {
	const input = [ 2 ];
	sortColors(input);
	expect(input).toEqual([ 2 ]);
});
