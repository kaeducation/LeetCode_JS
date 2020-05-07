const hasCycle = require('./index');
const { ListNode } = require('./../utility/utility');

test('returns false on an empty list.', () => {
	expect(hasCycle(null)).toEqual(false);
});

test('returns true for circular linked lists', () => {
	const aNode = new ListNode('a');
	const bNode = new ListNode('b');

	aNode.next = bNode;
	bNode.next = aNode;

	expect(hasCycle(aNode)).toEqual(true);
});

test('returns true for circular linked lists that does not point to head.', () => {
	const aNode = new ListNode('a');
	const bNode = new ListNode('b');
	const cNode = new ListNode('c');

	aNode.next = bNode;
	bNode.next = cNode;
	cNode.next = bNode;

	expect(hasCycle(aNode)).toEqual(true);
});

test('returns false for non-circular linked lists', () => {
	expect(hasCycle(new ListNode('a'))).toEqual(false);
});
