const { faker } = require('@faker-js/faker');
const { calculateAge, daysUntilBirthday } = require('../birthday');
const hasLeapDay = require('../utils/hasLeapDay');

describe('Тестирование функций', () => {
  describe('Функция calculateAge', () => {
    it('Возвращает 0 лет для текущего времени или недавней даты', () => {
      const currentDate = new Date();
      expect(calculateAge(currentDate)).toBe(0);

      const recentDate = faker.date.recent();
      expect(calculateAge(recentDate)).toBe(0);

      const pastDate = faker.date.past();
      expect(calculateAge(pastDate)).toBe(0);
    });
    it('Возвращает 0, если дата из будущего', () => {
      const soonDate = faker.date.soon();
      expect(calculateAge(soonDate)).toBe(0);

      const futureDate = faker.date.future();
      expect(calculateAge(futureDate)).toBe(0);
    });
    it('Корректно считает возраст', () => {
      const tenYearsAndOneDayAgo = new Date();
      tenYearsAndOneDayAgo.setFullYear(tenYearsAndOneDayAgo.getFullYear() - 10);
      tenYearsAndOneDayAgo.setDate(tenYearsAndOneDayAgo.getDate() - 1);
      expect(calculateAge(tenYearsAndOneDayAgo)).toBe(10);

      const almostFiveYearsAgo = new Date();
      almostFiveYearsAgo.setFullYear(almostFiveYearsAgo.getFullYear() - 5);
      almostFiveYearsAgo.setDate(almostFiveYearsAgo.getDate() + 1);
      expect(calculateAge(almostFiveYearsAgo)).toBe(4);

      const randomDate = new Date();
      const years = Math.floor(Math.random() * 100);
      const days = Math.floor(Math.random() * 300);
      randomDate.setFullYear(randomDate.getFullYear() - years);
      randomDate.setDate(randomDate.getDate() + days);
      expect(calculateAge(randomDate)).toBe(years - 1);
    });
  });

  describe('Функиця daysUntilBirthday', () => {
    it('Возвращает 0 дней для текущей даты', () => {
      const currentDate = new Date();
      expect(daysUntilBirthday(currentDate)).toBe(0);
    });
    it('Возвращает 0 дней для будущей даты', () => {
      const tomorrow = faker.date.soon();
      expect(daysUntilBirthday(tomorrow)).toBe(0);

      const future = faker.date.future();
      expect(daysUntilBirthday(future)).toBe(0);
    });
    it('Возвращает 364 дня для вчерашней даты', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(daysUntilBirthday(yesterday)).toBe(hasLeapDay() ? 365 : 364);
    });
    it('Корректно считает количество дней', () => {
      const randomDate = new Date();
      randomDate.setFullYear(randomDate.getFullYear() - 10);
      randomDate.setDate(randomDate.getDate() + 15);
      expect(daysUntilBirthday(randomDate)).toBe(15);
    });
  });
});
