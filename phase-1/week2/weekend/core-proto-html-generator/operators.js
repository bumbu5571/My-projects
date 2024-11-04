Number.prototype.plus = function(num) {
  return this + num;
}

Number.prototype.minus = function(num) {
  return this - num;
}
Number.prototype.multiply = function(num) {
  return this * num;
}
Number.prototype.divide = function(num) {
  return this / num;
}

const x = (2).plus(3).minus(1) 
const y = (2).multiply(10).divide(3)

console.log(x, y);
