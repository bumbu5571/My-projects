/*

  Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной

  Для начала пропиши аргументы функции.  

  Пример: 'elbrus_bootcamp' => 'elbrusBootcamp'

*/

const camelCase = (str) => {
  /* Тут код*/
  let UpperCaseAfter_ = str.replace(
    /_(.)/g, (_, letter ) => letter.toUpperCase() 
  );
  return UpperCaseAfter_;
}


module.exports = camelCase
