const Teacher = require('../Teacher');

describe('Teacher class', () => {
  let teacher;

  beforeEach(() => {
    teacher = new Teacher('John Doe', 2, 50_000,"Teacher", 'Whales');
  });

  test('constructor initializes properties correctly', () => {
    expect(teacher.name).toBe('John Doe');
    expect(teacher.category).toBe(2);
    expect(teacher.salary).toBe(50_000);
    expect(teacher.group).toBe('Whales');
  });

  test('getInfo returns correct information', () => {
    const info = teacher.getInfo();
    expect(info).toBe('name: John Doe, job title: Teacher, category: 2, salary: 50000, group: Whales');
  });

  test('increaseCategory increments category and salary correctly', () => {
    teacher.increaseCategory();
    expect(teacher.category).toBe(3);
    expect(teacher.salary).toBe(80_000);
  });

  test('increaseSalary increases salary correctly', () => {
    teacher.increaseSalary(10);
    expect(teacher.salary).toBe(55_000);
  });

  test('changeGroup updates group correctly', () => {
    teacher.changeGroup('Tigers');
    expect(teacher.group).toBe('Tigers');
  });

  test('askLecture returns correct response', () => {
    expect(teacher.askLecture()).toBe('You already know it!');
  });
});
