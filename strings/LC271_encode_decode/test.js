const Codec = require('./index');

const c = new Codec();

test('encode returns a string', () => {
	expect(typeof c.encode([ 'kevin', 'is', 'great' ]) === 'string').toEqual(true);
});

test('decode returns back the correct array', () => {
	const res = c.encode([ 'kevin', 'is', 'great' ]);
	const decodedRes = c.decode(res);
	expect(decodedRes).toEqual([ 'kevin', 'is', 'great' ]);
});
