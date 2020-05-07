const removeNthFromEnd = require('./index');
const { convertArrToLL, fetchLLVals } = require('./../utility/utility');

test('removeNthFromEnd([5,4,3,2,1], 2) becomes [5,4,3,1]', () => {
	const startingLL = convertArrToLL([ 5, 4, 3, 2, 1 ]);
	expect(fetchLLVals(removeNthFromEnd(startingLL, 2))).toEqual([ 5, 4, 3, 1 ]);
});

test('removeNthFromEnd([5,4,3,2,1], 1) becomes [5,4,3,2]', () => {
	const startingLL = convertArrToLL([ 5, 4, 3, 2, 1 ]);
	expect(fetchLLVals(removeNthFromEnd(startingLL, 1))).toEqual([ 5, 4, 3, 2 ]);
});

test('removeNthFromEnd([1], 1) becomes []', () => {
	expect(removeNthFromEnd({ val: 'meow', next: null }, 1)).toEqual(null);
});
