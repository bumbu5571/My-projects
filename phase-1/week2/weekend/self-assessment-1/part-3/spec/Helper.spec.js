const Helper = require('../Helper');

describe('Helper class', () => {
  let helper;

  beforeEach(() => {
    helper = new Helper('Jane Doe', 1, 30_000,"Helper");
  });

  test('constructor initializes properties correctly', () => {
    expect(helper.name).toBe('Jane Doe');
    expect(helper.category).toBe(1);
    expect(helper.salary).toBe(30_000);
  });

  test('getInfo returns correct information', () => {
    const info = helper.getInfo();
    expect(info).toBe('name: Jane Doe, job title: Helper, category: 1, salary: 30000');
  });

  test('increaseCategory increments category and salary correctly', () => {
    helper.increaseCategory();
    expect(helper.category).toBe(2);
    expect(helper.salary).toBe(60_000);
  });

  test('increaseSalary increases salary correctly', () => {
    helper.increaseSalary(10);
    expect(helper.salary).toBe(33_000);
  });

  test('askHelp returns correct response', () => {
    expect(helper.askHelp()).toBe('You can do it!');
  });
});
