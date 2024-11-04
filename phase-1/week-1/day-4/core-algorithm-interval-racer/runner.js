const dice = {
  roll: function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  },
};

function game() {
  // Скрываем курсор
  process.stdout.write("\x1B[?25l");

  let route1 = "a| | | | | | | | | | | | | | | | | | | | ";
  let route2 = "b| | | | | | | | | | | | | | | | | | | | ";
  let finished = false;

  // Функция для шага игрока
  function step(player, route) {
    const rol = dice.roll();
    let pos = route.indexOf(player);

    // Новая позиция после броска кубика
    let newPos = pos + rol * 2;

    // Проверяем, не достигли ли мы конца маршрута
    if (newPos >= route.length) {
      newPos = route.length - 1; // Максимальная позиция
    }

    // Обновляем маршрут, сохраняя пройденный путь
    if (player === 'a') {
      // Убираем старую позицию
      route1 = route.slice(0, pos) + " " + route.slice(pos + 1);
      // Устанавливаем новую позицию
      route1 = route1.slice(0, newPos) + player + route1.slice(newPos + 1);
    } else {
      // Убираем старую позицию
      route2 = route.slice(0, pos) + " " + route.slice(pos + 1);
      // Устанавливаем новую позицию
      route2 = route2.slice(0, newPos) + player + route2.slice(newPos + 1);
    }
  }

  // Функция для анимации каждого хода
  function animate() {
    // Проверяем, достиг ли кто-то из игроков конца маршрута
    if (route1.indexOf("a") >= route1.length - 1 || route2.indexOf("b") >= route2.length - 1) {
      finished = true;
      // Обновляем последнее состояние маршрутов
      process.stdout.write("\r" + route1 + "\n" + route2 + "\n");
      // Определяем, кто выиграл
      console.log(whoWon(route1, route2));
      process.stdout.write("\x1B[?25h"); // Включаем курсор обратно
      return; // Выходим из функции
    }

    // Переписываем текущее состояние маршрутов
    process.stdout.write("\r" + route1 + "\n" + route2 + "\n");

    // Задержка перед следующим шагом
    setTimeout(() => {
      step('a', route1); // Ход игрока 'a'
      step('b', route2); // Ход игрока 'b'

      // Если игра не закончилась, запускаем анимацию снова
      if (!finished) {
        process.stdout.write("\x1B[2A"); // Перемещаем курсор на две строки вверх
        animate(); // Запускаем анимацию снова
      }
    }, 500); // Задержка для анимации 500 мс
  }

  // Запуск анимации
  console.clear(); // Очищаем экран перед началом
  animate(); // Старт анимации
}

function whoWon(player1, player2) {
  if (player1.indexOf("a") > player2.indexOf("b")) {
    return "Победил игрок a!!!";
  } else if (player1.indexOf("a") === player2.indexOf("b")) {
    return "Ничья!!!";
  } else {
    return "Победил игрок b!!!";
  }
}

// Запуск игры
game();