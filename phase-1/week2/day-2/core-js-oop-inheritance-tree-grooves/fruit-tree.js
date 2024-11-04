class FruitTree {
  constructor(age = 0) {
    this.age = age;
    this.height = 0;
    this.maxHeight = 0;
    this.fruits = [];
    this.isAlive = false;
    this.ageDead = 0;
    this.tempGrowth = 0;
    this.ageMaturity = 0;
    this.minFruits = 0;
    this.maxFruits = 0;
    this.typeFruit = null;
  }

  passGrowingSeason() {
    this.dropFruits();

    if (this.age < this.ageDead && this.age >= 0) {
      this.age += 1;
    } else {
      this.isAlive = true;
    }

    if (this.height < this.maxHeight) {
      this.height += this.tempGrowth;
      if (this.height > this.maxHeight) {
        this.height = this.maxHeight;
      }
    }

    if (this.age >= this.ageMaturity) {
      this.fruits = this.produceFruits();
    } else {
      this.fruits = [];
    }
  }

  produceFruits() {
    const numOrigin =
      Math.floor(Math.random() * (this.maxFruits - this.minFruits + 1)) +
      this.minFruits;
    const fruits = [];

    for (let i = 0; i < numOrigin; i++) {
      fruits.push(this.typeFruit);
    }
    return fruits;
  }

  dropFruits() {
    this.fruits = [];
  }

  isDead() {
    return this.isAlive;
  }

  isMature() {
    return this.age >= this.ageMaturity;
  }

  hasFruits() {
    return this.fruits.length > 0;
  }

  pickAnFruits() {
    if (!this.hasFruits()) {
      throw Error("This tree has no fruits");
    } else {
      return this.fruits.pop();
    }
  }
}

module.exports = FruitTree;
