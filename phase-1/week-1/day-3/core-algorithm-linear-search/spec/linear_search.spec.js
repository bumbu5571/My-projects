const { linearSearch, globalLinearSearch } = require("../linear_search");

describe("linearSearch()", function () {
  it("returns first index of item in array", function () {
    let item = 3;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(2);
  });
  it("for repeated values, returns the index of the first", function () {
    let item = 4;
    let arr = [1, 23, 5, 30, 4, 35, 1, 4, 3, 6];
    expect(linearSearch(item, arr)).toEqual(4);
  });
  it("if the element is missing, returns -1", function () {
    let item = "с";
    let arr = [1, 23, 5, 30, 4, 35, 1, 4, 3, 6];
    expect(linearSearch(item, arr)).toEqual(-1);
  });
});

describe("globalLinearSearch()", function () {
  it("returns array indxes of items in array", function () {
    let item = "a";
    let arr = ["b", "a", "n", "a", "n", "a", "s"];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
  });

  it("if the element is missing, returns -1", function () {
    let item = "с";
    let arr = ["b", "a", "n", "a", "n", "a", "s"];
    expect(globalLinearSearch(item, arr)).toEqual([-1]);
  });
  it("returns an array", function () {
    let item = "a";
    let arr = ["b", "a", "n", "a", "n", "a", "s"];
    expect(Array.isArray(globalLinearSearch(item, arr))).toEqual(true);
  });
});
