// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {

    if(!Array.isArray(arr)) return "Not array";

    if(!arr.every(item => typeof (item) === "number")) return "Array values, not numbers";

    if(!arr.length) return 0;

    const result = arr.reduce((accumulator, value) => value >= 0 ? accumulator + value: accumulator, 0);

    return result;
}

module.exports = positiveSum
