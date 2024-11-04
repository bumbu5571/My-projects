const fs = require("fs").promises;

class Company {
  constructor(programmers) {
    this.programmers = programmers;
  }

  sortProgrammersByExperience() {
    const sortArray = [...this.programmers];
    return sortArray.sort((a, b) => b.experience - a.experience);
  }

  filterProgrammersBySalary(minSalary) {
    return this.programmers.filter(
      (programmer) => programmer.salary > minSalary
    );
  }

  calculateAverageSalary() {
    return (
      this.programmers.reduce((acc, programmer) => acc + programmer.salary, 0) /
      this.programmers.length
    );
  }

  /**
   * Обрати внимание, что уже подключена библиотека fs в формате require('fs').promises
   *
   * @param filePath путь к файлу, куда надо сохранить отчет
   */
  async generateReport(filePath) {
    let text = "";

    this.programmers.forEach((programmer) => {
      text += `${programmer.name} - ${programmer.salary}\n`;
    });

    text += `Total: ${this.programmers.reduce(
      (acc, programmer) => acc + programmer.salary,
      0
    )}\n`;

    await fs.writeFile(filePath, text);
  }
}

module.exports = Company;
