// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
  if (!Array.isArray(arr)) return "Not array";

  if (!arr.every((item) => typeof item === "string"))
    return "Array values, not string";

  let result = [];

  if (arr.length === 0) return result;

  result.push(
    arr.reduce((acc, value, index, array) => {
      let someArray = [];

      someArray.push(acc, [...array.slice(index)].join(" "));
      result.push(someArray);

      return acc + " " + value;
    })
  );
  result.length = arr.length - 1;

  return result;
}

module.exports = partlist;
