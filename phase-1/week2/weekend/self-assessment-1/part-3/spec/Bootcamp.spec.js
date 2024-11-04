const Bootcamp = require('../Bootcamp');
const Teacher = require('../Teacher');
const Manager = require('../Manager');
const Helper = require('../Helper');

describe('Bootcamp class', () => {
  let bootcamp;
  let teachers;
  let managers;
  let helpers;

  beforeEach(() => {
    teachers = [
      new Teacher('John Doe', 2, 50_000, 'A'),
      new Teacher('Jane Smith', 3, 60_000, 'B'),
    ];
    managers = [
      new Manager('Alice Johnson', 3, 80_000),
      new Manager('Bob Brown', 4, 100_000),
    ];
    helpers = [
      new Helper('Charlie Green', 1, 30_000),
      new Helper('Diana Blue', 2, 40_000),
    ];
    bootcamp = new Bootcamp('TechStars', teachers, managers, helpers);
  });

  test('constructor initializes properties correctly', () => {
    expect(bootcamp.name).toBe('TechStars');
    expect(bootcamp.teachers).toEqual(teachers);
    expect(bootcamp.managers).toEqual(managers);
    expect(bootcamp.helpers).toEqual(helpers);
  });

  test('getWorkers returns correct array of workers', () => {
    const workers = bootcamp.getWorkers();
    expect(workers).toEqual([...teachers, ...managers, ...helpers]);
  });

  test('indexSalary updates salary of teachers, managers, and helpers correctly', () => {
    bootcamp.indexSalary(10);
    expect(teachers[0].salary).toBe(55_000);
    expect(teachers[1].salary).toBe(66_000);
    expect(managers[0].salary).toBe(88_000);
    expect(managers[1].salary).toBe(110_000);
    expect(helpers[0].salary).toBe(33_000);
    expect(helpers[1].salary).toBe(44_000);
  });

  test('getMonthlyBudget returns the correct total monthly budget', () => {
    const monthlyBudget = bootcamp.getMonthlyBudget();
    expect(monthlyBudget).toBe(50_000 + 60_000 + 80_000 + 100_000 + 30_000 + 40_000);
  });
});
