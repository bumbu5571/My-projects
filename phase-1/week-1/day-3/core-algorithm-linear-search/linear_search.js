//Реализуй функции линейного поиска. Проверь результат тестами.

function linearSearch(current, array) {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    if (current === array[i] && result < 0) result = i;
  }

  return result;
}

function globalLinearSearch(current, array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (current === array[i]) result.push(i);
  }

  if (result.length === 0) result.push(-1);

  return result;
}

module.exports = {
  linearSearch,
  globalLinearSearch,
};
