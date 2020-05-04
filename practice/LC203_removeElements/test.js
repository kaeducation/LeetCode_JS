const removeElements = require('./index');
const { fetchLLVals, convertArrToLL } = require('./../../linkedLists/utility/utility');

test('[1,2,3,4,5,6], val = 6 returns [1,2,3,4,5]', () => {
	const input = convertArrToLL([ 1, 2, 3, 4, 5, 6 ]);
	const modifiedInput = removeElements(input, 6);
	expect(fetchLLVals(modifiedInput)).toEqual([ 1, 2, 3, 4, 5 ]);
});

test('[1,1], val = 1 returns []', () => {
	const input = convertArrToLL([ 1, 1 ]);
	const modifiedInput = removeElements(input, 1);
	expect(fetchLLVals(modifiedInput)).toEqual([]);
});
