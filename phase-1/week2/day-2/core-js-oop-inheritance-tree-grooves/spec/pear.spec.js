const Pear = require('../pear');

describe('Pear', () => {
	let pear, desiredDiameterRange;

	beforeEach(() => {
		pear = new Pear();
		desiredDiameterRange = [2.9, 4.1]
	});

	test('has a diameter more than 2.9', () => {
		expect(pear.diameter >= desiredDiameterRange[0]).toBeTruthy();
	});

	test('has a diameter less than 4.1', () => {
		expect(pear.diameter <= desiredDiameterRange[1]).toBeTruthy();
	});

});