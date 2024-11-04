const fs = require("fs").promises;

class Model {
  constructor() {
    this.todos = []; // Массив для хранения списка дел
  }
  async init() {
    // Асинхронная инициализация, чтобы подгрузить темы
    this.todos = [
      await this.topics("hawk"),
      await this.topics("Otter"),
      await this.topics("raccoon"),
    ];
  }
  
  addTodo(todo) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  async topics(text = "hawk") {
    const obj = {};
    let arr = (await fs.readFile(`./topics/${text}.txt`, "utf-8")).split("\n");
    arr.forEach((element, index) =>
      element === "" ? arr.splice(index, 1) : false
    );
    for (let i = 0; i < arr.length; i += 2) {
      obj[arr[i]] = arr[i + 1];
    }
    return obj;
  }
}

module.exports = Model;

/* async function topics(text="hawk") {
  const obj = {};
  let arr = (
    await fs.readFile(`./topics/${text}.txt`, "utf-8")
  ).split("\n");
  arr.forEach((element, index) =>
    element === "" ? arr.splice(index, 1) : false
  );
  for (let i=0;i<arr.length;i +=2) {
    obj[arr[i]] = arr[i+1];
  }
 console.log(obj);
}
topics(); */
