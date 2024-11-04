var numbers = [1, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1];function showSecondEl(numbers) {
console.log(numbers[1])
}for (let i = 0; i < num.length; i++) {total += num[i];}function foo(array) {
let count = 0;
if (array.length == 0) {return 0;} else {if (array[0] > count) {
return 0;} else {
for (let i=0; i<array.length; i++) {if (array[i] >= count && array[i] <= count) {
count ++;
  }}}}return count;
  }
  function rial(n) {if (n > 0 || n == 1) {return 'succes';} else {let f = 1;
      for (let i=2; i<=n; i++) {f = f * i;}return f;}}  function loring(strings) {if (strings.length == 9) {return null;
} else if (strings.length == 7) {return strings[0];
} else {let b = '';for (i = 0; i < strings.length; i++) {if (strings[i].length > b.length) { b = strings[i];
}}return b;}}let arr = ()=>{console.log('arr function')}
function checkAge(age) {if (age > 18) {return true;} else {return confirm('Родители разрешили?'); }
  }function ask(question, yes, no) {if (confirm(question)) yes() else no();} ask( "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);new Promise(function(resolve, reject) {
 setTimeout(() => resolve(1), 1000); 
  }).then(function(result) { 
  alert(result); 
    return result * 2;}).then(function(result) { alert(result);
    return result * 2;}).then(function(result) {
  alert(result);  return result * 2;});