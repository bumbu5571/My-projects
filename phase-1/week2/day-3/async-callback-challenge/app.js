const { resolve } = require("path");
const path = require("path");
const fs = require("fs").promises;

const readPath = path.join(__dirname, "./words.txt");
const writePath = path.join(__dirname, "./spec/output.txt");

function readFileAndProcess(readPath, writePath, callback) {
  return new Promise((resolve, reject) => {
    resolve(
      fs
        .readFile(readPath, "utf-8")
        .then((date) => callback(date.split(" ")))
        .then((date) => fs.appendFile(writePath, date))
    );

    reject(new Error("Ошибка чтения файла"));
  });
}

function getUniqueWords(words) {
  const result = [];

  words.forEach((element) => {
    !result.includes(element) ? result.push(element) : false;
  });
  return result.join(" ");
}

function getSortedWords(words) {
  const someResult = [];

  words.forEach((element) => {
    !someResult.includes(element) ? someResult.push(element) : false;
  });

  const result = someResult.filter((el) => el.length >= 5);
  result.sort();

  return result.join(" ");
}

function stringToTitleCase(words) {
  return words
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .sort()
    .join(" ");
}

module.exports = {
  readFileAndProcess,
  getSortedWords,
  getUniqueWords,
  stringToTitleCase,
};
