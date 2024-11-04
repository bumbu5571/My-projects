const Person = require("./person");

class Teacher extends Person {
  constructor(name, students = []) {
    super(name);
    this.students = students;
  }

  deleteGroup(groupName) {
    let newGroup = this.students.filter(
      (student) => student.group !== groupName
    );

    this.students = newGroup;
  }

  findGroup(studentName) {
    let nameGroup = this.students.find(
      (student) => student.name === studentName
    );
    if (nameGroup) {
      return nameGroup.group;
    } else return undefined;
  }

  teach(newSkill) {
    this.students.map((student) => {
      student.learn(newSkill);
    });
  }
}

module.exports = Teacher;
