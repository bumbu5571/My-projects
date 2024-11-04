const Fruit = require("./fruit");

class Pear extends Fruit {
  randomDiameter() {
    const diameters = [2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1];
    return diameters[Math.floor(Math.random() * diameters.length)];
  }
}

module.exports = Pear;