// Наш герой.

// const Boomerang = require('./Boomerang');

class Hero {
  constructor({ position, weapon }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.weapon = weapon;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack(enemy, hero, track) {
    // Атакуем.
    // this.boomerang.fly();
    hero.weapon.position = hero.position;
    this.weapon.fly(enemy, hero, track);
    hero.weapon.position = -1;
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
