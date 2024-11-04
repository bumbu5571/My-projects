const fs = require("fs");

class ModelSync {
  constructor() {
    this.todos = [this.topics("hawk"),this.topics("otter"),this.topics("raccoon")]; // Массив для хранения списка дел
    this.hawk = "hawk"
    this.otter = "otter";
    this.raccoon = "raccoon";
  }

  getTodos() {
    return this.todos;
  }

  getQuestions(number) {

    if (number === '1') {
      const hawkQuestions = Object.keys(this.todos[0])
      return hawkQuestions 
    } 

    if (number === '2') {
      const otterQuestions = Object.keys(this.todos[1])
      return otterQuestions
    }

    if (number === '3') {
      const raccoonQuestions = Object.keys(this.todos[2])
      return raccoonQuestions
    }    
  }

  topics(text = "hawk") {
    const obj = {};
    let arr = (fs.readFileSync(`./topics/${text}.txt`, "utf-8")).split("\n");
    arr.forEach((element, index) =>
      element === "" ? arr.splice(index, 1) : false
    );
    for (let i = 0; i < arr.length; i += 2) {
      obj[arr[i]] = arr[i + 1];
    }
    return obj;
  }
}


module.exports = ModelSync;