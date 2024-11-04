const fs = require('fs/promises');
const Company = require('../Company');
const Programmer = require('../Programmer');

describe('Company class', () => {
  let company;
  let programmer1;
  let programmer2;
  let programmer3;

  beforeEach(() => {
    programmer1 = new Programmer(1, 'Alice', 28, 4, 50_000);
    programmer2 = new Programmer(2, 'Bob', 32, 8, 80_000);
    programmer3 = new Programmer(3, 'Charlie', 25, 2, 40_000);
    company = new Company([programmer1, programmer2, programmer3]);
  });

  describe('метод sortProgrammersByExperience', () => {
    test('возвращает отсортированный массив программистов', () => {
      const sortedProgrammers = company.sortProgrammersByExperience();
      expect(sortedProgrammers).toEqual([programmer2, programmer1, programmer3]);
    });

    test('не меняет исходный массив массив программистов', () => {
      const sortedProgrammers = company.sortProgrammersByExperience();
      expect(sortedProgrammers).not.toBe([programmer2, programmer1, programmer3]);
    });
  });

  test('метод filterProgrammersBySalary возвращает только программистов с зп выше указанной', () => {
    const filteredProgrammers = company.filterProgrammersBySalary(60_000);
    expect(filteredProgrammers).toEqual([programmer2]);
  });

  test('метод calculateAverageSalary правильно вычисляет среднюю зарплату программистов', () => {
    const averageSalary = company.calculateAverageSalary();
    expect(averageSalary).toBeCloseTo((50_000 + 80_000 + 40_000) / 3);
  });

  /**
   * Для отчета требуется предоставить данные в виде: Имя - зарплата
   * Каждый программист выводится на новой строке
   * В конце на новой строке выводится сообщение: Total: общая зарплата
   * В конце файла добавляется пустая строка
   */
  test('метод generateReport сохрянает информацию в указанный файл', async () => {
    const mockWriteFile = jest.spyOn(fs, 'writeFile').mockResolvedValue(true);

    await company.generateReport('report.txt');

    expect(mockWriteFile).toHaveBeenCalledWith(
      'report.txt',
      'Alice - 50000\nBob - 80000\nCharlie - 40000\nTotal: 170000\n',
    );
    mockWriteFile.mockRestore();
  });
});
