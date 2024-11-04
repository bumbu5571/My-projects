class View {
  displayTodos(hawk) {
      console.log('\x1b[35m Выберите вариант викторины: \x1b[0m');
      console.log(`\x1b[32m 1. Ночные ястребы \x1b[0m`);
      console.log(`\x1b[32m 2. Выдры \x1b[0m`);
      console.log(`\x1b[32m 3. Еноты \x1b[0m`);
      console.log('\n');
  }

  showMessage(message) {
      console.log(message);
  }
}

module.exports = View;