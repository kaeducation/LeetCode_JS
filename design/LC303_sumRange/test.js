const NumArray = require('./index');

test('insert(val) returns True for successful insertion, False for duplicate insertion', () => {
	const obj = new NumArray([ -2, 0, 3, -5, 2, -1 ]);

	expect(obj.sumRange(0, 2)).toEqual(1);
	expect(obj.sumRange(2, 5)).toEqual(-1);
	expect(obj.sumRange(0, 5)).toEqual(-3);
	expect(obj.sumRange(2, 2)).toEqual(3);
});
