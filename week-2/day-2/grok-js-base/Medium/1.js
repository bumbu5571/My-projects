/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
  /* Тут код*/
  let array = str.split("");

  array.forEach(element => {
    console.log(element)
  });
}

module.exports = logEachLetter
