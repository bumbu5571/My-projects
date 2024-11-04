// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
  if (!(typeof str === "string")) return "Not string";

  let result = str.slice(1, str.length - 1);

  return result;
}

module.exports = removeChar;
