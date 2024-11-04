const { fibonacciIteration, fibonacciRecursion } = require("../script");

describe("Функция фибоначчи Iteration", () => {
  let fbNumber;

  beforeEach(() => {
    fbNumber = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("число фибоначи для 3 => 2", () => {
    expect(fibonacciIteration(3)).toBe(fbNumber[3]);
  });
  it("число фибоначи для 5 => 5", () => {
    expect(fibonacciIteration(5)).toBe(fbNumber[5]);
  });
  it("число фибоначи для 7 => 13", () => {
    expect(fibonacciIteration(7)).toBe(fbNumber[7]);
  });
  it("число фибоначи для 10 => 55", () => {
    expect(fibonacciIteration(10)).toBe(fbNumber[10]);
  });
  it("число фибоначи для 15 => 610", () => {
    expect(fibonacciIteration(15)).toBe(fbNumber[15]);
  });
  it("число фибоначи для 77 => 5527939700884757", () => {
    expect(fibonacciIteration(77)).toBe(5527939700884757);
  });
});

describe("Функция фибоначчи Recursion", () => {
  let fbNumber;

  beforeEach(() => {
    fbNumber = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("число фибоначи для 3 => 2", () => {
    expect(fibonacciRecursion(3)).toBe(fbNumber[3]);
  });
  it("число фибоначи для 4 => 3", () => {
    expect(fibonacciRecursion(4)).toBe(fbNumber[4]);
  });
  it("число фибоначи для 9 => 34", () => {
    expect(fibonacciRecursion(9)).toBe(fbNumber[9]);
  });
  it("число фибоначи для 12 => 144", () => {
    expect(fibonacciRecursion(12)).toBe(fbNumber[12]);
  });
  it("число фибоначи для 16 => 987", () => {
    expect(fibonacciRecursion(16)).toBe(fbNumber[16]);
  });
  it("число фибоначи для 20 => 6765", () => {
    expect(fibonacciRecursion(20)).toBe(6765);
  });
});
