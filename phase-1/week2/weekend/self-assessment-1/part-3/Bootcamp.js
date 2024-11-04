const School = require("./School");

module.exports = class Bootcamp extends School {
  constructor(name, teachers, managers, helpers) {
    super(name, teachers, managers);
    this.helpers = helpers;
  }

  getWorkers() {
    return [...super.getWorkers(), ...this.helpers];
  }

  getMonthlyBudget() {
    return this.getWorkers().reduce((acc, worker) => acc + worker.salary, 0);
  }
};
