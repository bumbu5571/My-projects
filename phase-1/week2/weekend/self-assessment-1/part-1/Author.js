class Author {
  constructor(firstName, lastName, birthDate, deathDate = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.deathDate = deathDate && new Date(deathDate);
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getAge() {
    const diff =
      (this.deathDate || new Date()).getTime() - this.birthDate.getTime();
    const age = diff / 1000 / 60 / 60 / 24 / 365.25;

    return this.deathDate ? Math.round(age) : Math.floor(age);
  }
}

module.exports = { Author };
