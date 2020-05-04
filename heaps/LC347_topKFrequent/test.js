const topKFrequent = require('./index');

test('topKFrequent([1,1,1,2,2,3], 2) returns [1,2]', () => {
	expect(topKFrequent([ 1, 1, 1, 2, 2, 3 ], 2)).toEqual([ 1, 2 ]);
});

test('topKFrequent([1], 1) returns [1]', () => {
	expect(topKFrequent([ 1 ], 1)).toEqual([ 1 ]);
});

test('topKFrequent([], 10) returns []', () => {
	expect(topKFrequent([], 10)).toEqual([]);
});
