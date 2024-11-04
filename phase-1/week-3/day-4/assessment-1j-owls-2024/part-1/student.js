const Person = require("./person");

class Student extends Person {
  constructor(name, group, skills = []) {
    super(name);
    this.group = group;
    this.skills = skills;
  }

  learn(newSkill) {
    if (!this.skills.includes(newSkill)) this.skills.push(newSkill);
  }
}

module.exports = Student;
