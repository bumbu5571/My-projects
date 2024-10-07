/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив (массив, содержащий другие массивы) чисел и число из одного из вложенных массивов, а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1

*/

const nestedArr = (arr, number) => {
  /* Тут код*/
  let result;
  arr.forEach( (item, index) => {
    if( item.includes(number) ) {
      result = index;
    } 
  });

  return result;
}

module.exports = nestedArr
