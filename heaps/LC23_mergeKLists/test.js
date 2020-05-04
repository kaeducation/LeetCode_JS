const { ListNode, mergeKLists } = require('./index');

test('[[3,5,7], [0,6], [0,6,28]] returns head of [0,0,3,5,6,6,7,28]', () => {
	const head1 = new ListNode(3);
	let curr = head1;
	for (const num of [ 5, 7 ]) {
		curr.next = new ListNode(num);
		curr = curr.next;
	}

	const head2 = new ListNode(0);
	curr = head2;
	for (const num of [ 6 ]) {
		curr.next = new ListNode(num);
		curr = curr.next;
	}

	const head3 = new ListNode(0);
	curr = head3;
	for (const num of [ 6, 28 ]) {
		curr.next = new ListNode(num);
		curr = curr.next;
	}

	const resListHead = mergeKLists([ head1, head2, head3 ]);
	curr = resListHead;
	const resList = [];
	while (curr) {
		resList.push(curr.val);
		curr = curr.next;
	}

	expect(resList).toEqual([ 0, 0, 3, 5, 6, 6, 7, 28 ]);
});

test('[[]] returns null', () => {
	const resListHead = mergeKLists([ null ]);
	expect(resListHead).toEqual(null);
});
