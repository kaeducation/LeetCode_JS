const middleNode = require('./index');
const { convertArrToLL, fetchLLVals } = require('./../../linkedLists/utility/utility');

test('[1,2,3,4,5,6] returns head of [4, 5, 6]', () => {
	const head = convertArrToLL([ 1, 2, 3, 4, 5, 6 ]);
	const resList = fetchLLVals(middleNode(head));

	expect(resList).toEqual([ 4, 5, 6 ]);
});

test('[1,2,3,4,5] returns head of [3, 4, 5]', () => {
	const head = convertArrToLL([ 1, 2, 3, 4, 5 ]);
	const resList = fetchLLVals(middleNode(head));

	expect(resList).toEqual([ 3, 4, 5 ]);
});

test('No errors on empty list', () => {
	expect(middleNode(null)).toBeFalsy();
});
