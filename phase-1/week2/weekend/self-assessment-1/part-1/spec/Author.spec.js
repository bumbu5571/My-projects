const { Author } = require('../Author');

// Mock Date constructor
// В данном задании понадобится Date.
// Подробнее ознакомиться можно тут https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
const _Date = Date;
function MockDate(...mockOverride) {
  if (mockOverride.length === 0) return new _Date('2011-10-03T00:00:00.000Z');
  return new _Date(...mockOverride);
}
MockDate.UTC = _Date.UTC;
MockDate.parse = _Date.parse;
MockDate.now = function () {
  return new _Date('2011-10-03T00:00:00.000Z').valueOf();
};
describe('Author', () => {
  let author1;
  let author2;

  beforeAll(() => {
    global.Date = MockDate;
  });

  afterAll(() => {
    global.Date = _Date;
  });

  beforeEach(() => {
    author1 = new Author('John', 'Doe', '1980-01-01');
    author2 = new Author('Jane', 'Smith', '1970-01-01', '2020-01-01');
  });

  test('Конструктор создает автора корректно', () => {
    expect(author1.firstName).toBe('John');
    expect(author1.lastName).toBe('Doe');
    expect(author1.birthDate).toEqual(new Date('1980-01-01'));
    expect(author1.deathDate).toBe(null);
  });

  test('Метод getFullName() возвращает правильное полное имя', () => {
    expect(author1.getFullName()).toBe('John Doe');
    expect(author2.getFullName()).toBe('Jane Smith');
  });

  describe('Блок тестов для метода getAge()', () => {
    test('Метод getAge() корректно вычисляет возраст живого автора', () => {
      expect(author1.getAge()).toBe(31);
    });

    test('Метод getAge() корректно вычисляет возраст мертвого автора', () => {
      expect(author2.getAge()).toBe(50);
    });

    test('Метод getAge() корректно вычисляет возраст живого автора', () => {
      const author = new Author('John', 'Doe', '1980-11-01');
      const author3 = new Author('Mark', 'Banson', '1983-10-05');
      expect(author.getAge()).toBe(30);
      expect(author3.getAge()).toBe(27);
    });
  });
});
