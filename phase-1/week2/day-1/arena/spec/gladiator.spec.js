const { gladiator } = require('../gladiator');

describe('Гладиаторские бои', () => {
  describe('Характеристика гладиатора', () => {
    test('У гладиатора есть свойство name', () => {
      expect(gladiator).toHaveProperty('name');
    });

    test('У гладиатора есть свойство hp', () => {
      expect(gladiator).toHaveProperty('hp');
    });

    test('У гладиатора есть свойство sp', () => {
      expect(gladiator).toHaveProperty('sp');
    });

    test('У гладиатора есть свойство strength', () => {
      expect(gladiator).toHaveProperty('strength');
    });

    test('У гладиатора есть свойство level', () => {
      expect(gladiator).toHaveProperty('level');
    });

    test('У гладиатора есть свойство exp', () => {
      expect(gladiator).toHaveProperty('exp');
    });
  });
});
