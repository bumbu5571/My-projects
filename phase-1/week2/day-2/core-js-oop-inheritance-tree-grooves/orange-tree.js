const Orange = require("./orange")
const FruitTree = require("./fruit-tree")

class OrangeTree extends FruitTree {
  constructor(age) {
    super(age)
    this.maxHeight = 25;
    this.ageDead = 100;
    this.tempGrowth = 2.5;
    this.ageMaturity = 6;
    this.minFruits = 100;
    this.maxFruits = 300;
    this.typeFruit = new Orange();
    this.height = this.age * this.tempGrowth;
    this.isAlive = age >= this.ageDead
  }
};

module.exports = OrangeTree;
