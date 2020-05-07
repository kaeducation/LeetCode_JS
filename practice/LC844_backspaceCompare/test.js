const backspaceCompare = require('./index');

test('returns true correctly', () => {
	expect(backspaceCompare('y#fo##f', 'y#f#o##f')).toEqual(true);
	expect(backspaceCompare('a##c', '#a#c')).toEqual(true);
});

test('returns false correctly', () => {
	expect(backspaceCompare('a#c', 'b')).toEqual(false);
});
