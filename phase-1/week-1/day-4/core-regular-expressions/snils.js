// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.

const { getVersion } = require("jest");

// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
  return !!string.match(/(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})/gm);
}

hasSNILS("The number is 234-600-142 22");

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
  let arr = string.match(/(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})/gm);

  return arr[0];
}

/*
// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {

}


// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {

}



// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {

} */

module.exports = {
  hasSNILS,
  grabSNILS /*
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS */,
};
