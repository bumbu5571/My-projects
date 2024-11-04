const Apple = require('../apple');

describe('Apple', () => {
	let apple, desiredDiameterRange;

	beforeEach(() => {
		apple = new Apple();
		desiredDiameterRange = [1.5, 2.5]
	});

	test('has a diameter more than 1.5', () => {
		expect(apple.diameter >= desiredDiameterRange[0]).toBeTruthy();
	});

	test('has a diameter less than 2.5', () => {
		expect(apple.diameter <= desiredDiameterRange[1]).toBeTruthy();
	});

});