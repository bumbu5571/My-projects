const School = require('../School');
const Teacher = require('../Teacher');
const Manager = require('../Manager');

describe('School class', () => {
  let school;
  let teachers;
  let managers;

  beforeEach(() => {
    teachers = [
      new Teacher('John Doe', 2, 50_000, 'A'),
      new Teacher('Jane Smith', 3, 60_000, 'B'),
    ];
    managers = [
      new Manager('Alice Johnson', 3, 80_000),
      new Manager('Bob Brown', 4, 100_000),
    ];
    school = new School('Green Valley', teachers, managers);
  });

  test('constructor initializes properties correctly', () => {
    expect(school.name).toBe('Green Valley');
    expect(school.teachers).toEqual(teachers);
    expect(school.managers).toEqual(managers);
  });

  test('getWorkers returns correct array of workers', () => {
    const workers = school.getWorkers();
    expect(workers).toEqual([...teachers, ...managers]);
  });

  test('indexSalary updates salary of teachers and managers correctly', () => {
    school.indexSalary(10);
    expect(teachers[0].salary).toBe(55_000);
    expect(teachers[1].salary).toBe(66_000);
    expect(managers[0].salary).toBe(88_000);
    expect(managers[1].salary).toBe(110_000);
  });
});
