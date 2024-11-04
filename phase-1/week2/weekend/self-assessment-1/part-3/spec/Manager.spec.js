const Manager = require('../Manager');

describe('Manager class', () => {
  let manager;

  beforeEach(() => {
    manager = new Manager('Alice Smith', 3, 80_000,"Manager");
  });

  test('constructor initializes properties correctly', () => {
    expect(manager.name).toBe('Alice Smith');
    expect(manager.category).toBe(3);
    expect(manager.salary).toBe(80_000);
  });

  test('getInfo returns correct information', () => {
    const info = manager.getInfo();
    expect(info).toBe('name: Alice Smith, job title: Manager, category: 3, salary: 80000');
  });

  test('increaseCategory increments category and salary correctly', () => {
    manager.increaseCategory();
    expect(manager.category).toBe(4);
    expect(manager.salary).toBe(110_000);
  });

  test('increaseSalary increases salary correctly', () => {
    manager.increaseSalary(10);
    expect(manager.salary).toBe(88_000);
  });
});
