const Profession = require("./profession");

module.exports = class Manager extends Profession {
  constructor(name, category, salary, jobTitle) {
    super(name, category, salary, jobTitle)
  }

};
