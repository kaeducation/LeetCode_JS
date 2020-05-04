const mergeTwoLists = require('./index');
const { ListNode, convertArrToLL, fetchLLVals } = require('./../utility/utility');

test('[1,3], [2,4,6,8] returns head of [1,2,3,4,6,8]', () => {
	const odds = convertArrToLL([ 1, 3 ]);
	const evens = convertArrToLL([ 2, 4, 6, 8 ]);

	const resList = fetchLLVals(mergeTwoLists(odds, evens));
	expect(resList).toEqual([ 1, 2, 3, 4, 6, 8 ]);
});

test('[1,3], [] returns head of [1,3]', () => {
	const odds = convertArrToLL([ 1, 3 ]);

	const resList = fetchLLVals(mergeTwoLists(odds, null));

	expect(resList).toEqual([ 1, 3 ]);
});

test('[], [] returns head of []', () => {
	expect(mergeTwoLists(null, null)).toEqual(null);
});

test('New list made by splicing together nodes of  first two lists.', () => {
	const odds = convertArrToLL([ 1, 3 ]);
	expect(mergeTwoLists(odds, null)).toEqual(odds);
});
