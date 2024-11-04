class Tourist {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.tours = [];
  }

  buy(countryName, agency) {

    if (agency.tours.find((el) => el.country === countryName)) {
      this.tours.push(agency.sell(countryName));
      return true;
    } else return false;
  }
}

module.exports = Tourist;
