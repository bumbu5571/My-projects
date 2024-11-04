class Fruit {
  constructor() {
    this.diameter = this.randomDiameter();
  }

  randomDiameter() {
    const diameters = [];
    return diameters[Math.floor(Math.random() * diameters.length)];
  }
}

module.exports = Fruit;
