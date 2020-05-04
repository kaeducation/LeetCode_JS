class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const convertArrToLL = (arr) => {
	let dummyHead = new ListNode('dummy');
	let tailOfResList = dummyHead;

	for (const val of arr) {
		const node = new ListNode(val);
		tailOfResList.next = node;
		tailOfResList = tailOfResList.next;
	}

	return dummyHead.next;
};

const fetchLLVals = (headNode) => {
	let curr = headNode;
	const res = [];

	while (curr) {
		res.push(curr.val);
		curr = curr.next;
	}

	return res;
};

module.exports = { ListNode, convertArrToLL, fetchLLVals };
