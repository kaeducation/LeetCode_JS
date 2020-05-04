const MovingAverage = require('./index');

test('MovingAverage Works', () => {
	const m = new MovingAverage(3);

	expect(m.next(1)).toEqual(1);
	expect(m.next(10)).toEqual(5.5);
	expect(m.next(3)).toEqual(4.666666666666667);
	expect(m.next(5)).toEqual(6);
});
