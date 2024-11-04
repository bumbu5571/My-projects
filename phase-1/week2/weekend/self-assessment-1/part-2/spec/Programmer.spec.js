const Programmer = require('../Programmer');

xdescribe('Programmer class', () => {
  let programmer;

  beforeEach(() => {
    programmer = new Programmer(1, 'John Doe', 30, 5, 60_000);
  });

  test('constructor initializes id correctly', () => {
    expect(programmer.id).toBe(1);
  });

  test('constructor initializes name correctly', () => {
    expect(programmer.name).toBe('John Doe');
  });

  test('constructor initializes age correctly', () => {
    expect(programmer.age).toBe(30);
  });

  test('constructor initializes experience correctly', () => {
    expect(programmer.experience).toBe(5);
  });

  test('constructor initializes salary correctly', () => {
    expect(programmer.salary).toBe(60_000);
  });
});
