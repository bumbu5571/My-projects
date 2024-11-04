const readline = require("readline");
const View = require("./View");
const Controller = require("./Controller");
const ModelSync = require("./model-sync");



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ModelSync();
const view = new View();
const controller = new Controller(model, view, rl);


controller.updateView();
controller.addTodo();


