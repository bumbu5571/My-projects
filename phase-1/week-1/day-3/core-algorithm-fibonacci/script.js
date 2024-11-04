function fibonacciIteration(number) {
  if (number === 0) return 0;
  let a = 1;
  let b = 1;

  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

function fibonacciRecursion(number) {
  if (number === 0) return 0;
  else if (number === 1) return 1;
  else if (number === 2) return 1;
  else {
    return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
  }
}

module.exports = { fibonacciIteration, fibonacciRecursion };
