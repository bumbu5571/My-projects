const Apple = require("./apple");
const FruitTree = require("./fruit-tree");

class AppleTree extends FruitTree {
  constructor(age) {
    super(age);
    this.maxHeight = 26;
    this.ageDead = 45;
    this.tempGrowth = 2;
    this.ageMaturity = 5;
    this.minFruits = 400;
    this.maxFruits = 600;
    this.typeFruit = new Apple();
    this.height = this.age * this.tempGrowth;
    this.isAlive = age >= this.ageDead
  }
}


module.exports = AppleTree;
