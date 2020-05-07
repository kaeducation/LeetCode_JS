const MyQueue = require('./index');

test('Push and pop lead to FIFO behavior.', () => {
	const queue = new MyQueue();

	queue.push(1);
	queue.push(2);
	queue.push(3);

	expect(queue.pop()).toEqual(1);
	expect(queue.pop()).toEqual(2);
	expect(queue.pop()).toEqual(3);
});

test('Peek and empty work', () => {
	let queue = new MyQueue();

	queue.push(1);
	expect(queue.empty()).toEqual(false);
	queue.push(2);
	expect(queue.peek()).toEqual(1);
	expect(queue.pop()).toEqual(1);
	expect(queue.empty()).toEqual(false);
	queue.pop();
	expect(queue.empty()).toEqual(true);
});
