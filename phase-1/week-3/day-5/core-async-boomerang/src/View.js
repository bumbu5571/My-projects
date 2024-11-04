// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    const yourTeamName = '🎃 ХеллоуинTeam 👻';
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    // Тут всё рисуем.
    console.log(`Created by "${yourTeamName}" with ❤️`);
  }
}

module.exports = View;
