const Profession = require("./profession");

module.exports = class Helper extends Profession {
  constructor(name, category, salary, jobTitle) {
    super(name, category, salary, jobTitle);
  }

  askHelp() {
    return "You can do it!";
  }
};
