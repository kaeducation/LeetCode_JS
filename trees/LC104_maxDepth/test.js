const maxDepth = require('./index');
const { BinarySearchTree } = require('../utility/utility');

test('Works for Binary Trees of with 1, 2, and 3 levels.', () => {
	const BST = new BinarySearchTree();
	BST.insert(8);
	expect(maxDepth(BST.root)).toEqual(1);
	BST.insert(3);
	BST.insert(10);
	expect(maxDepth(BST.root)).toEqual(2);
	BST.insert(14);
	//          8
	//        /   \
	//       3     10
	//      / \      \
	//               14
	expect(maxDepth(BST.root)).toEqual(3);
});

test('Works for Binary Tree with 0 levels', () => {
	const BST = new BinarySearchTree();
	expect(maxDepth(BST.root)).toEqual(0);
});
