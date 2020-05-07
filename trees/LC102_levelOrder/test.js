const levelOrder = require('./index');
const { BinarySearchTree } = require('../utility/utility');

test('Works.', () => {
	const BST = new BinarySearchTree();
	BST.insert(8);
	BST.insert(3);
	BST.insert(10);
	BST.insert(1);
	BST.insert(6);
	BST.insert(14);
	//          8
	//        /   \
	//       3     10
	//      / \      \
	//     1   6     14
	expect(levelOrder(BST.root)).toEqual([ [ 8 ], [ 3, 10 ], [ 1, 6, 14 ] ]);
});
