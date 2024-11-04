const Profession = require("./profession");

module.exports = class Teacher extends Profession {
  constructor(name, category, salary, jobTitle, group) {
    super(name, category, salary, jobTitle);
    this.group = group;
  }

  getInfo() {
    return super.getInfo() + `, group: ${this.group}`;
  }

  changeGroup(group) {
    this.group = group;
  }

  askLecture() {
    return "You already know it!";
  }
};
