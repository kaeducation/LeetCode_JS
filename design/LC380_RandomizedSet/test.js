const RandomizedSet = require('./index');

test('insert(val) returns True for successful insertion, False for duplicate insertion', () => {
	const randomSet = new RandomizedSet();
	expect(randomSet.insert(4)).toEqual(true);
	expect(randomSet.insert(4)).toEqual(false);
});

test('remove(val) returns True for successful removal, False if value not present', () => {
	const randomSet = new RandomizedSet();
	expect(randomSet.remove(0)).toEqual(false);
	expect(randomSet.remove(0)).toEqual(false);

	expect(randomSet.insert(0)).toEqual(true);

	expect(randomSet.remove(0)).toEqual(true);
	expect(randomSet.insert(0)).toEqual(true);
	randomSet.remove(0);

	expect(randomSet.insert(3)).toEqual(true);
	expect(randomSet.insert(-2)).toEqual(true);
	expect(randomSet.remove(2)).toEqual(false);
	expect(randomSet.insert(1)).toEqual(true);
	expect(randomSet.insert(-3)).toEqual(true);

	expect(randomSet.insert(-2)).toEqual(false);
	expect(randomSet.remove(-2)).toEqual(true);
	expect(randomSet.remove(3)).toEqual(true);
	expect(randomSet.insert(-1)).toEqual(true);
	expect(randomSet.remove(-3)).toEqual(true);

	expect(randomSet.insert(1)).toEqual(false);
	expect(randomSet.insert(-2)).toEqual(true);
	expect(randomSet.insert(-2)).toEqual(false);
	expect(randomSet.insert(-2)).toEqual(false);
	expect(randomSet.insert(1)).toEqual(false);

	expect(randomSet.insert(-2)).toEqual(false);
	expect(randomSet.remove(0)).toEqual(false);
	expect(randomSet.insert(-3)).toEqual(true);
	expect(randomSet.insert(1)).toEqual(false);
});

test('getRandom() returns a random element from current set of elements', () => {
	const randomSet = new RandomizedSet();
	randomSet.insert(4);
	for (let i = 0; i < 100; i++) {
		randomSet.insert(13);
	}

	let fourCount = 0;
	for (let i = 0; i < 1000; i++) {
		if (randomSet.getRandom() === 4) {
			fourCount += 1;
		}
	}
	expect(fourCount < 600).toEqual(true);
	expect(fourCount > 400).toEqual(true);

	const randomSet2 = new RandomizedSet();

	expect(randomSet2.insert(0)).toEqual(true);
	expect(randomSet2.insert(1)).toEqual(true);
	expect(randomSet2.remove(0)).toEqual(true);
	expect(randomSet2.insert(2)).toEqual(true);
	expect(randomSet2.remove(1)).toEqual(true);
	expect(randomSet2.getRandom()).toEqual(2);
});
