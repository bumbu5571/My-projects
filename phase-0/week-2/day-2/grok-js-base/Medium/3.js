/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
  /* Тут код*/
  let array = [start,end];
  let sortArray = array.sort(( a, b ) => {return a - b});
  
  let result = 0;
  
  if (start >= 0) {
    if (end >= 0) {
      for (let i = sortArray[1]; i >= sortArray[0]; i--) {
      result += i;
      }
    };
  } 

  return result;
}

module.exports = sumOfIntegers
