/*

Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/

const longestString = (array) => {
  /* Тут код*/
  let result;

  if (array.length === 0 ) {
    result = null;
    return result;
  }

  let longLengthItem = array.reduce( function (accumulator, item) {
    if (item.length > accumulator ) accumulator = item.length;
    return accumulator;
  }, 0)
  
  result = array.find( item => item.length === longLengthItem );
  return result;
}

module.exports = longestString
