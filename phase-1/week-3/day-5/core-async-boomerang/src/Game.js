// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0, weapon: new Boomerang(0) });
    this.enemy = new Enemy(trackLength);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (this.hero.weapon.position > 0) {
      this.track[this.hero.weapon.position + 1] = this.hero.weapon.skin;
    }
    // console.log(this.hero.weapon.position)
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (
      this.hero.position === this.hero.weapon.position
      && this.enemy.skin === '💀'
    ) {
      this.hero.weapon.position = -1;
      this.regenerateTrack();
      this.view.render(this.track);
      console.log('You win! 💃👻💃');
      process.exit();
    }
    if( this.enemy.skin !== '💀') {
      this.enemy.moveLeft();
    }
  }

  play() {
    runInteractiveConsole(this.hero, this.enemy, this.track);
    this.time = setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 50);
  }
}

module.exports = Game;
