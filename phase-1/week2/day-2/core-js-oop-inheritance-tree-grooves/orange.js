const Fruit = require("./fruit");

class Orange extends Fruit {
  randomDiameter() {
    const diameters = [2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2];
    return diameters[Math.floor(Math.random() * diameters.length)];
  }
}

module.exports = Orange;
