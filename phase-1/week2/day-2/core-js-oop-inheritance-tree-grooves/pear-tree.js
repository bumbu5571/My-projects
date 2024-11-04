const Pear = require("./pear");
const FruitTree = require("./fruit-tree");

class PearTree extends FruitTree {
  constructor(age) {
    super(age);
    this.maxHeight = 20;
    this.ageDead = 40;
    this.tempGrowth = 2.5;
    this.ageMaturity = 5;
    this.minFruits = 175;
    this.maxFruits = 225;
    this.typeFruit = new Pear();
    this.height = this.age * this.tempGrowth;
    this.isAlive = age >= this.ageDead
  }
}

module.exports = PearTree;
