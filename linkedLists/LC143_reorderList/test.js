const reorderList = require('./index');
const { convertArrToLL, fetchLLVals } = require('./../utility/utility');

test('[1,2,3,4,5,6] returns head of [1, 6, 2, 5, 3, 4]', () => {
	const head = convertArrToLL([ 1, 2, 3, 4, 5, 6 ]);

	reorderList(head);
	const resList = fetchLLVals(head);

	expect(resList).toEqual([ 1, 6, 2, 5, 3, 4 ]);
});

test('[1,2,3] returns head of [1,3,2]', () => {
	const head = convertArrToLL([ 1, 2, 3 ]);

	reorderList(head);
	const resList = fetchLLVals(head);

	expect(resList).toEqual([ 1, 3, 2 ]);
});

test('No errors on empty list', () => {
	expect(reorderList(null)).toBeFalsy();
});
