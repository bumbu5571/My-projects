const fs = require("fs");
const cfonts = require("cfonts");

function read() {
  const numOfSudoku = Number(process.argv[2]);

  const textFromFile = fs.readFileSync("puzzles.txt", "utf-8");
  const arrs = textFromFile.trim().split("\r\n");
  const numberOfstring = arrs[numOfSudoku - 1];
  const newArr = [];
  for (let i = 0; i < 9; i += 1) {
    newArr.push(numberOfstring.slice(i * 9, i * 9 + 9).split(""));
  }
  return newArr;
}

function solve(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == "-") {
        for (let k = 1; k <= 9; k++) {
          if (isSolved(data, i, j, k)) {
            data[i][j] = `${k}`;
            if (solve(data)) {
              return true;
            } else {
              data[i][j] = "-";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isSolved(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}

function prettyBoard() {
  try {
    const resultSudoku = read();
    const originalSudoku = resultSudoku;
    const newOriginalSudoku = originalSudoku.map((el) => el.join(" "));
    solve(resultSudoku);
    const newResultSudoku = resultSudoku.map((el) => el.join(" "));

    cfonts.say("sudoku", {
      font: "block", // define the font face
      align: "center", // define text alignment */
      colors: ["white"], // define all colors
      background: "black", // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1, // define letter spacing
      lineHeight: 1, // define the line height
      space: true, // define if the output text should have empty lines on top and on the bottom
      maxLength: "0", // define how many character can be on one line
      gradient: "red,blue", // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: true, // define if this is a transition between colors directly
      rawMode: false, // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
      env: "node",
    });
    setTimeout(()=> {console.log("\x1b[31m",`Вариант судоку для решения:\n\n${newOriginalSudoku.join(
      `\r\n`)}`)}, 1000);
    setTimeout(()=> {console.log("\x1b[35m",`\nРешенное судоку:\n\n${newResultSudoku.join("\r\n")}`)}, 2500);
  } catch {
    cfonts.say("error", {
      font: "block", // define the font face
      align: "center", // define text alignment */
      colors: ["white"], // define all colors
      background: "black", // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1, // define letter spacing
      lineHeight: 1, // define the line height
      space: true, // define if the output text should have empty lines on top and on the bottom
      maxLength: "0", // define how many character can be on one line
      gradient: "red,blue", // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: true, // define if this is a transition between colors directly
      rawMode: false, // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
      env: "node",
    });
    console.log("\x1b[41m",'Введите число от 1 до 15')
  }
}

module.exports = { read, solve, isSolved, prettyBoard };
