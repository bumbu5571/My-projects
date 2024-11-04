module.exports = class Profession {
  constructor(name, category, salary, jobTitle) {
    this.name = name;
    this.category = category;
    this.salary = salary;
    this.jobTitle = jobTitle;
  }

  getInfo() {
    return `name: ${this.name}, job title: ${this.jobTitle}, category: ${this.category}, salary: ${this.salary}`;
  }

  increaseCategory() {
    this.category += 1;
    this.salary += 30_000;
  }

  increaseSalary(percent) {
    const addSalary = Math.round(this.salary * (percent / 100));
    this.salary += addSalary;
  }
};
