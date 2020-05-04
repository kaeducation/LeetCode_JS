const reverseList = require('./index');
const { ListNode } = require('./../utility/utility');

test('reverse(a -> b) returns b -> a', () => {
	const aNode = new ListNode('A');
	const bNode = new ListNode('B');
	aNode.next = bNode;

	expect(reverseList(aNode)).toEqual(bNode);
	expect(bNode.next).toEqual(aNode);
	expect(aNode.next).toEqual(null);
});

test('reverse(null) returns null', () => {
	expect(reverseList(null)).toEqual(null);
});
