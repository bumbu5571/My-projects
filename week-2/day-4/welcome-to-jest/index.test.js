const positiveSum = require("./01-SumOfPositive");
const partlist = require("./02-PartsOfAList");
const removeChar = require("./03-RemoveFirstAndLastCharacter");
const countLanguages = require("./04-PrepareTheCountOfLanguages");

describe("Тесты функции positiveSum:", () => {
  /* 
    Написать функцию, принимающую массив и возвращающее число, которое является 
    суммой положительных чисел входящего массива.

    Тесты функции обработки массива:
        Общие тесты:
            -Функция работает только с массивами
            -Значения массива числа
            -Возвращает ли функция 0, если суммировать не чего 
        Функциональные тесты:
            -Суммирует ли функция значения массива
            -Игнорирует ли функция отрицательные значения

*/

  let valueNotArray;
  let array;

  beforeAll(() => {
    array = [];
  });

  describe("Общие тесты:", () => {
    test("Функция работает только с массивами", () => {
      valueNotArray = {};
      expect(positiveSum(valueNotArray)).toBe("Not array");
      valueNotArray = "string";
      expect(positiveSum(valueNotArray)).toBe("Not array");
      valueNotArray = true;
      expect(positiveSum(valueNotArray)).toBe("Not array");
    });

    test("Значения массива числа", () => {
      array.push(...[true, "string", {}]);
      expect(positiveSum(array)).toBe("Array values, not numbers");
      array.length = 0;
    });

    test("Возвращает ли функция 0, если суммировать не чего", () => {
      expect(positiveSum(array)).toBe(0);
    });
  });

  describe("Функциональные тесты:", () => {
    beforeEach(() => {
      array = [1, 2, 3, 4, 5];
    });

    test("Суммирует ли функция значения массива", () => {
      expect(positiveSum(array)).toBe(15);
    });

    test("Игнорирует ли функция отрицательные значения", () => {
      array.push(...[-5, 2, -3, -2, 3]);
      expect(positiveSum(array)).toBe(20);
    });
  });
});

describe("Тесты функции partlist:", () => {
  /* 
    Написать функцию которая принимает массив, возвращает массив содержащий коллекцию массивов, 
    функия должна находить все способы разделения массива из не менее двух элементов
    на две не пустые части.

    Тесты функции обработки массива:
        Общие тесты:
            -Функция работает только с массивами
            -Значения массива строка
            -Возвращает ли функция массив 
        Функциональные тесты:
          -Длинна входящего и длинна коллекции массива одинаковая
          -Содержит ли возвращаемый массив коллекцию массивов
          -Выполняет ли функция задание

*/

  let valueNotArray;
  let array;

  beforeAll(() => {
    array = [];
  });

  describe("Общие тесты:", () => {
    test("Функция работает только с массивами", () => {
      valueNotArray = {};
      expect(partlist(valueNotArray)).toBe("Not array");
      valueNotArray = "string";
      expect(partlist(valueNotArray)).toBe("Not array");
      valueNotArray = true;
      expect(partlist(valueNotArray)).toBe("Not array");
    });

    test("Значения массива строка", () => {
      array.push(...[true, "string", {}]);
      expect(partlist(array)).toBe("Array values, not string");
      array.length = 0;
    });

    test("Возвращает ли функция массив ", () => {
      expect(Array.isArray(partlist(array))).toBe(true);
    });
  });

  describe("Функциональные тесты:", () => {
    beforeEach(() => {
      array = ["az", "toto", "picaro", "zone", "kiwi"];
    });

    test("длинна коллекции массива на 1 меньше длинны входящего массива ", () => {
      expect(partlist(array).length).toBe(array.length - 1);
    });

    test("Содержит ли возвращаемый массив коллекцию массивов", () => {
      expect(partlist(array).every((item) => Array.isArray(item))).toBe(true);
    });

    test("Выполняет ли функция задание", () => {
      expect(partlist(array)).toEqual([
        ["az", "toto picaro zone kiwi"],
        ["az toto", "picaro zone kiwi"],
        ["az toto picaro", "zone kiwi"],
        ["az toto picaro zone", "kiwi"],
      ]);
    });
  });
});

describe("Тесты функции removeChar:", () => {
  /* 
    Написать функцию, принимающую строку и возвращает строку, в которой удалён первый и
    последний символ из входящей строки.

    Тесты функции обработки массива:
        Общие тесты:
            -Функция работает только с строкам
            -Возвращает ли строку
        Функциональные тесты:
            -Удаляет ли функция первый и последний символ
            -Длинна строки уменьшается на 2 символа

*/

  let valueNotString;
  let string;

  beforeAll(() => {
    string = "eloquent";
  });

  describe("Общие тесты:", () => {
    test("Функция работает только с строкам", () => {
      valueNotString = {};
      expect(removeChar(valueNotString)).toBe("Not string");
      valueNotString = 52;
      expect(removeChar(valueNotString)).toBe("Not string");
      valueNotString = true;
      expect(removeChar(valueNotString)).toBe("Not string");
    });

    test("Возвращает ли строку", () => {
      expect(typeof removeChar(string)).toBe("string");
    });
  });

  describe("Функциональные тесты:", () => {
    beforeEach(() => {
      string += "country";
    });

    test("Удаляет ли функция первый и последний символ", () => {
      expect(removeChar(string)).toBe("loquentcountr");
    });

    test("Длинна строки уменьшается на 2 символа", () => {
      expect(removeChar(string).length).toBe(string.length - 2);
    });
  });
});

describe("Тесты функции countLanguages:", () => {
  /* 
    Написать функцию, принимающую массив и возвращающее объект, который содержит 
    количество языков программирования из входящего массива.

    Тесты функции обработки массива:
        Общие тесты:
            -Функция работает только с массивами
            -Значения массива объекты
            -Возвращает объект
        Функциональные тесты:
            -Свойства объекта языки программирования и их верное количество

*/

  let valueNotArray;
  let array;

  beforeAll(() => {
    array = [];
  });

  describe("Общие тесты:", () => {
    test("Функция работает только с массивами", () => {
      valueNotArray = {};
      expect(countLanguages(valueNotArray)).toBe("Not array");
      valueNotArray = "string";
      expect(countLanguages(valueNotArray)).toBe("Not array");
      valueNotArray = true;
      expect(countLanguages(valueNotArray)).toBe("Not array");
    });

    test("Значения массива объекты", () => {
      array.push(...[true, "string", {}]);
      expect(countLanguages(array)).toBe("Array values, not object");
      array.length = 0;
    });

    test("Возвращает объект", () => {
      array.push({});
      expect(typeof countLanguages(array)).toBe("object");
    });
  });

  describe("Функциональные тесты:", () => {
    beforeEach(() => {
      array = [
        {
          firstName: "Noah",
          lastName: "M.",
          country: "Switzerland",
          continent: "Europe",
          age: 19,
          language: "C",
        },
        {
          firstName: "Anna",
          lastName: "R.",
          country: "Liechtenstein",
          continent: "Europe",
          age: 52,
          language: "JavaScript",
        },
        {
          firstName: "Ramon",
          lastName: "R.",
          country: "Paraguay",
          continent: "Americas",
          age: 29,
          language: "Ruby",
        },
        {
          firstName: "George",
          lastName: "B.",
          country: "England",
          continent: "Europe",
          age: 81,
          language: "C",
        },
      ];
    });

    test("Свойства объекта языки программирования", () => {
      expect(countLanguages(array)).toMatchObject({
        C: 2,
        JavaScript: 1,
        Ruby: 1,
      });
    });
  });
});
