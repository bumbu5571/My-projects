/* const Orange = require("./orange"); */

class OrangeTree {
  constructor(age, height) {
    this.age = age;
    this.height = height;
    this.maxHeight = 25;
    this.fruits = [];
    this.isAlive = false;
  }
  passGrowingSeason() {
    this.dropFruits();

    if (this.age < 100 && this.age >= 0) {
      this.age += 1;
    } else {
      this.isAlive = true;
    }

    if (this.height < this.maxHeight) {
      this.height += 2.5;
      if (this.height > this.maxHeight) {
        this.height = this.maxHeight;
      }
    }

    if (this.age >= 6) {
      this.fruits = this.produceFruits();
    } else {
      this.fruits = [];
    }
  }

  produceFruits() {
    const numOrigin = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    const oranges = [];

    for (let i = 0; i < numOrigin; i++) {
      oranges.push(new Orange());
    }
    return oranges;
  }

  dropFruits() {
    this.fruits = [];
  }

  isDead() {
    return this.isAlive;
  }

  isMature() {
    return this.age >= 6;
  }

  hasOranges() {
    return this.fruits.length > 0;
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error("This tree has no oranges");
    } else {
      return this.fruits.pop();
    }
    //  orange-picking logic goes here
  }
}

/* module.exports = OrangeTree; */
