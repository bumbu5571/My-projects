/*

Создайте функцию, которая принимает в качестве аргументов три неотрицательных числа, а возвращает значение true («истина»), если три стороны могут сформировать треугольник,
и false («ложь») в противоположном случае.  
Каждое число представляет собой длину стороны треугольника. 

Пример: (3, 4, 5) => true  
  
Для начала пропиши аргументы функции.  

*/

const validTriangle = (side1, side2, side3) => {
  /* Тут код*/
  const sides = [side1, side2, side3];
  let result = true;

  for (let item of sides) {
    if (item <= 0) result = false;
  }  
  
  if ( (side1 + side2) > side3) {
    if ( (side2 + side3) > side1) {
      if ( (side3 + side1) > side2) {
        return result = true;
      } else return result = false;
    } else return result = false;
  } else return result = false;

}

console.log(validTriangle(1,1,1))

module.exports = validTriangle
