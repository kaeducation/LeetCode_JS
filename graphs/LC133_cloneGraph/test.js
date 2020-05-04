const { Node, cloneGraph } = require('./index');

test('Works for valid graph', () => {
	const oneNode = new Node(1, []);
	const twoNode = new Node(2, []);

	oneNode.neighbors.push(twoNode);
	twoNode.neighbors.push(oneNode);

	const oneNodeClone = cloneGraph(oneNode);
	expect(oneNodeClone.val).toEqual(1);
	expect(oneNodeClone !== oneNode).toEqual(true);
	expect(oneNodeClone.neighbors.length).toEqual(1);

	const twoNodeClone = oneNodeClone.neighbors[0];
	expect(twoNodeClone.val).toEqual(2);
	expect(twoNodeClone !== twoNode).toEqual(true);
	expect(twoNodeClone.neighbors).toEqual([ oneNodeClone ]);
});
