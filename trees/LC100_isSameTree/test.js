const isSameTree = require('./index');
const { BinarySearchTree } = require('../utility/utility');

test('returns true for same trees', () => {
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

	const BST2 = new BinarySearchTree();
	BST2.insert(8);
	BST2.insert(3);
	BST2.insert(10);
	BST2.insert(1);
	BST2.insert(6);
	BST2.insert(14);
	expect(isSameTree(BST.root, BST2.root)).toEqual(true);
});

test('returns false for different trees', () => {
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

	const BST2 = new BinarySearchTree();
	BST2.insert(8);
	BST2.insert(3);
	BST2.insert(10);
	BST2.insert(1);
	BST2.insert(6);
	BST2.insert(144);
	expect(isSameTree(BST.root, BST2.root)).toEqual(false);
});
