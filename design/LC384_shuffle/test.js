const Solution = require('./index');

function createNumsArr(length) {
	const res = [];
	for (let i = 0; i < length; i++) {
		res.push(i);
	}
	return res;
}

test('Shuffle works', () => {
	const deckOfCards = new Solution(createNumsArr(52));
	const deckOfCards2 = new Solution(createNumsArr(52));

	const resultShuffle = deckOfCards.shuffle();
	const resultShuffle2 = deckOfCards2.shuffle();
	expect(resultShuffle.join('') === resultShuffle2.join('')).toEqual(false);
});

test('Reset works', () => {
	const obj = new Solution(createNumsArr(100));
	obj.shuffle();
	expect(obj.reset().join('') === createNumsArr(100).join('')).toEqual(true);
	obj.shuffle();
	expect(obj.reset().join('') === createNumsArr(100).join('')).toEqual(true);
});
