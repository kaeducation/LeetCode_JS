const minMeetingRooms = require('./index');

test('[] --> returns 0', () => {
	expect(minMeetingRooms([])).toEqual(0);
});

test('null --> returns 0', () => {
	expect(minMeetingRooms(null)).toEqual(0);
});

test('[[0, 30]] --> returns 1', () => {
	expect(minMeetingRooms([ [ 0, 30 ] ])).toEqual(1);
});

test('[[7, 10], [2, 4]] --> returns 1', () => {
	expect(minMeetingRooms([ [ 7, 10 ], [ 2, 4 ] ])).toEqual(1);
});

test('[[0, 30], [5, 10], [15, 20]] --> returns 2', () => {
	expect(minMeetingRooms([ [ 0, 30 ], [ 5, 10 ], [ 15, 20 ] ])).toEqual(2);
});
