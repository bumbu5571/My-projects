function generateChessboard() {
  const result = [];
  const figures = [
    "Ладья",
    "Конь",
    "Слон",
    "Ферзь",
    "Король",
    "Слон",
    "Конь",
    "Ладья",
  ];
  const pawns = new Array(8).fill("Пешка");

  result.push(Array.from(figures, (el) => "Ч " + el));

  result.push(Array.from(pawns, (el) => "Ч " + el));

  for (let i = 0; i < 4; i++) {
    result.push(Array.from(pawns, (el) => null));
  }

  result.push(Array.from(pawns, (el) => "Б " + el));

  result.push(Array.from(figures, (el) => "Б " + el));

  return result;
}

const resultGenerateChessboard = generateChessboard();

function renderChessboard() {
  const emojis = {
    "Б Ферзь": "♕",
    "Б Король": "♔",
    "Б Слон": "♗",
    "Б Конь": "♘",
    "Б Ладья": "♖",
    "Б Пешка": "♙",
    "Ч Ферзь": "♛",
    "Ч Король": "♚",
    "Ч Слон": "♝",
    "Ч Конь": "♞",
    "Ч Ладья": "♜",
    "Ч Пешка": "♟",
  };

  for (let arr of resultGenerateChessboard) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "Б Ферзь") arr[i] = emojis["Б Ферзь"];
      if (arr[i] === "Б Король") arr[i] = emojis["Б Король"];
      if (arr[i] === "Б Слон") arr[i] = emojis["Б Слон"];
      if (arr[i] === "Б Конь") arr[i] = emojis["Б Конь"];
      if (arr[i] === "Б Ладья") arr[i] = emojis["Б Ладья"];
      if (arr[i] === "Б Пешка") arr[i] = emojis["Б Пешка"];
      if (arr[i] === "Ч Ферзь") arr[i] = emojis["Ч Ферзь"];
      if (arr[i] === "Ч Король") arr[i] = emojis["Ч Король"];
      if (arr[i] === "Ч Слон") arr[i] = emojis["Ч Слон"];
      if (arr[i] === "Ч Конь") arr[i] = emojis["Ч Конь"];
      if (arr[i] === "Ч Ладья") arr[i] = emojis["Ч Ладья"];
      if (arr[i] === "Ч Пешка") arr[i] = emojis["Ч Пешка"];
    }
  }
}

module.exports = { generateChessboard, renderChessboard };
