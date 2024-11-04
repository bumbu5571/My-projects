const Tour = require('./Tour');
class Agency {
  constructor(money, tours = []) {
    this.money = money;
    this.tours = tours;
  }

  availableToursCount() {
    return this.tours.length;
  }

  findTour(countryName) {
    return this.tours.find((el) => el.country === countryName);
  }

  sell(countryName) {
    if (this.tours.findIndex((el) => el.country === countryName) === -1) {
      return undefined;
    } else {
      let current = this.tours.find((el) => el.country === countryName);
      this.money += current["price"];
      return this.tours.splice(
        this.tours.findIndex((el) => el.country === countryName),
        1
      )[0];
    }
  }
}

module.exports = Agency;


let turkey = new Tour('Turkey', 70000);
let egypt = new Tour('Egypt', 85000);
let india = new Tour('India', 100000);
let thailand = new Tour('Thailand', 105000);
let agency = new Agency(100000, [turkey, egypt, india, thailand]);

console.log(agency.tours)
agency.sell('Thailand')
console.log(agency.tours)