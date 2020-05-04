const kClosest = require('./index');

test('kClosest works', () => {
	let res = kClosest([ [ 1, 3 ], [ -2, 2 ] ], 1);
	expect(res).toEqual([ [ -2, 2 ] ]);

	res = kClosest([ [ 3, 3 ], [ 5, -1 ], [ -2, 4 ] ], 2);
	expect(res.length).toEqual(2);

	const stringJoins = [];
	res.forEach((subArr) => {
		stringJoins.push(subArr.join(''));
	});

	expect(stringJoins.includes('-24')).toEqual(true);
	expect(stringJoins.includes('33')).toEqual(true);
});
