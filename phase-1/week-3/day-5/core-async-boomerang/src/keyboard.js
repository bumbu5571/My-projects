// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require("keypress");

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  a: (hero) => hero.moveLeft(),
  d: (hero) => hero.moveRight(),
  e: () => console.log("e"),
  r: () => console.log("r"),
  t: () => console.log("t"),
  y: (hero, enemy) => {
    hero.attack(enemy, hero);
  },
};

// Какая-то функция.

function runInteractiveConsole(hero, enemy) {
  keypress(process.stdin);
  process.stdin.on("keypress", (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](hero, enemy);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === "t") {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

module.exports = runInteractiveConsole;
