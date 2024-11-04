// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position) {
    this.skin = "🌀";
    this.position = position;
  }

  fly(enemy, hero) {
    /* console.log("this.position", hero.weapon.position);
    console.log("enemy.position", enemy.position);
    console.log("hero.position", hero.position); */

    if (hero.weapon.position < enemy.position - 2 && [
      "👾",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ].includes(enemy.skin)) {
      this.moveRight();

      setTimeout(() => {
        this.fly(enemy, hero);
      }, 50);
    } else if (this.position === enemy.position - 2) {
      hero.weapon.position -= 2;
      enemy.die();
      this.fly(enemy, hero);
    } else if (this.position > hero.position) {
      this.moveLeft();
      setTimeout(() => {
        this.fly(enemy, hero);
      }, 50);
    }

    // this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
