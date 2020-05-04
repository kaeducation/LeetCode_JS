const copyRandomList = require('./index');
const { ListNode, fetchLLVals } = require('./../utility/utility');

test('Works when random pointers point to valid node', () => {
	const oneNode = new ListNode(1);
	const twoNode = new ListNode(2);

	oneNode.next = twoNode;
	oneNode.random = twoNode;
	twoNode.random = twoNode;

	const resHead = copyRandomList(oneNode);
	expect(resHead === oneNode).toEqual(false);
	expect(resHead.next === twoNode).toEqual(false);

	expect(resHead.random === resHead.next).toEqual(true);
	expect(resHead.next.random === resHead.next).toEqual(true);

	expect(fetchLLVals(resHead)).toEqual([ 1, 2 ]);
});

test('Works when random pointers point to null', () => {
	const oneNode = new ListNode(1);
	const twoNode = new ListNode(2);

	oneNode.next = twoNode;
	oneNode.random = twoNode;
	twoNode.random = null;

	const resHead = copyRandomList(oneNode);
	expect(resHead === oneNode).toEqual(false);
	expect(resHead.next === twoNode).toEqual(false);

	expect(resHead.random === resHead.next).toEqual(true);
	expect(resHead.next.random).toBeFalsy();

	expect(fetchLLVals(resHead)).toEqual([ 1, 2 ]);
});

test('Returns null on empty list', () => {
	expect(copyRandomList(null)).toEqual(null);
});
