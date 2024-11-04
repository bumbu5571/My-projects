// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function countLanguages(list) {
  if (!Array.isArray(list)) return "Not array";

  if (!list.every((item) => typeof item === "object"))
    return "Array values, not object";

  let result = {};
  let someArray = [];

  list.forEach((item) => {
    for (let key in item) {
      if (key === "language") someArray.push(item[key]);
    }
  });

  someArray.forEach((item, index, arr) => {
    result[item] = arr.reduce((acc, value) => {
      return item == value ? acc + 1 : acc;
    }, 0);
  });

  return result;
}

module.exports = countLanguages;
