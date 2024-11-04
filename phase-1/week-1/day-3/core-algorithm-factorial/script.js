function factorialIteration(number) {
  let sum = 1;

  if (number > 0) {
    while (number > 1) {
      sum *= number;
      number--;
    }
    return sum;
  } else {
    return "Отрицательное число";
  }
}

function factorialRecursion(number) {
  if (number > 0) {
    return number === 1 ? number : number * factorialRecursion(number - 1);
  } else {
    return "Отрицательное число";
  }
}

/* let result = factorialRecursion(170);
console.log(BigInt(result)); максимальный результат для обоих функций который получил
,дальше возвращается Infinity 
7257415615307994045399635715589591467896184117242257803405544211755693246215271577444614997868077640013184176271985826801597743247247979077995336619429980685793285768053360886112149825437081356365699043287884614002788490694530469661753007801896962563721104619242357348735986883814984039817295623520648167424n


/* function factorialRecursion(number) {
  
  if (number > 0) {
    return number === 1n ? number : number * factorialRecursion(number - 1n);
  } else {
    return "Отрицательное число";
  }
}

console.log(factorialRecursion(10463n));

максимальный результат для factorialRecursion 10463 вызова */

/* function factorialIteration(number) {
  let sum = 1n;

  if (number > 0n) {
    while (number > 1n) {
      sum *= number;
      number--;
    }
    return sum;
  } else {
    return "Отрицательное число";
  }
}

console.log(factorialIteration(700000n));

функция factorialIteration => остановился на результате в 700000n время выполнения 254.55 секунд */
