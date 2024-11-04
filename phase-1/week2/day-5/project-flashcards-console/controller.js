class Controller {
  constructor(model, view, readline) {
    this.model = model;
    this.view = view;
    this.readline = readline;
  }

  addTodo() {
    this.readline.question(
      "\x1b[33m Введите данные или  'выход' для выхода \x1b[0m): \n",
      (todo) => {
        if (todo === "1") {
          const hawkQuestions = this.model.getQuestions(todo);
          const hawkObj = this.model.todos[0];

          this.askQuestionsRecursively(hawkQuestions, hawkObj, 0);
        }

        if (todo === "2") {
          const otterQuestions = this.model.getQuestions(todo);
          const otterObj = this.model.todos[1];

          this.askQuestionsRecursively(otterQuestions, otterObj, 0);
        }

        if (todo === "3") {
          const raccoonQuestions = this.model.getQuestions(todo);
          const raccoonkObj = this.model.todos[2];

          this.askQuestionsRecursively(raccoonQuestions, raccoonkObj, 0);
        } 

        if (todo.toLowerCase() === "выход") {
          this.view.showMessage("Выход из приложения...");
          this.readline.close();
          return;
        }

        this.addTodo();
      }
    );
  }

  askQuestionsRecursively(hawkQuestions, hawkObj, index, total = 0) {
    if (index >= hawkQuestions.length) {
      console.log('\x1b[36m%s\x1b[0m',"Все вопросы завершены.");
      console.log('\x1b[36m%s\x1b[0m', `Вы набрали: ${total} баллов из ${hawkQuestions.length} возможных`);
      this.readline.close();
      return;
    }

    const currentQuestion = hawkQuestions[index];
    console.log(currentQuestion);

    this.readline.question("\nВведите ответ:\n", (userAnswer) => {
      if (userAnswer === hawkObj[currentQuestion]) {
        console.log("\n\x1b[32m Верно \x1b[0m\n");
        total += 1;
      } else {
        console.log("\n\x1b[31m Неверно \x1b[0m\n");
      }

      this.askQuestionsRecursively(hawkQuestions, hawkObj, index + 1, total);
    });
  }

  updateView() {
    const questions = this.model.getQuestions();
    this.view.displayTodos(questions);
  }
}

module.exports = Controller;
