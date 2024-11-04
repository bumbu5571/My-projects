const Fruit = require("./fruit");

class Apple extends Fruit {
  randomDiameter() {
    const diameters = [1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5];
    return diameters[Math.floor(Math.random() * diameters.length)];
  }
}

module.exports = Apple;
