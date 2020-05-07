const MinStack = require('./index');

test('top() works for empty and filled out stack', () => {
	const ms = new MinStack();
	expect(ms.top()).toEqual(undefined);
	ms.push(11);
	expect(ms.top()).toEqual(11);
	ms.push(13);
	expect(ms.top()).toEqual(13);
	ms.pop();
	expect(ms.top()).toEqual(11);
});

test('getMin() works for empty and filled out stack', () => {
	const ms = new MinStack();
	expect(ms.getMin()).toEqual(undefined);
	ms.push(-2);
	expect(ms.getMin()).toEqual(-2);
	ms.push(0);
	expect(ms.getMin()).toEqual(-2);
	ms.push(-3);
	expect(ms.getMin()).toEqual(-3);
	ms.pop();
	expect(ms.getMin()).toEqual(-2);

	const ms2 = new MinStack();
	expect(ms2.getMin()).toEqual(undefined);
	ms2.push(1);
	ms2.push(0);
	ms2.push(1);
	expect(ms2.getMin()).toEqual(0);
});
