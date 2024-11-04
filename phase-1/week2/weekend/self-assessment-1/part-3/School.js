module.exports = class School {
  constructor(name, teachers, managers) {
    this.name = name;
    this.teachers = teachers;
    this.managers = managers;
  }

  getWorkers() {
    return [...this.teachers, ...this.managers];
  }

  indexSalary(percent) {
    this.getWorkers().forEach((worker) => worker.increaseSalary(percent));
    
  }
};
