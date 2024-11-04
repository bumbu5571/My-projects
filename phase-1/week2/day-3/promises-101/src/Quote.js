const fs = require('fs/promises');
const path = require('path');

class Quote {
  // /** Запрашивает случайную цитату и возвращает промис с результатом */
  static getRandomQuote() {
    return fs
      .readFile(path.join(__dirname, '/mock-data.txt'), 'utf-8')
      .then((text) => {
        const arr = text.match(/([\s\S]+?)\r?\n\r?\n-- (.+?)\r?\n/gm);
        const randomIndex = Math.floor(Math.random() * 100);
        return {
          quote: arr[randomIndex].split('--')[0].trim(),
          author: arr[randomIndex].split('--')[1].trim(),
        };
      });
  }

  // /** Запрашивает все цитаты по заданному автору и возвращает промис с результатами */
  static getAuthorQuotes(author) {
    return fs
      .readFile(path.join(__dirname, '/mock-data.txt'), 'utf-8')
      .then((text) => {
        const arr = text.match(/([\s\S]+?)\r?\n\r?\n-- (.+?)\r?\n/gm);
        return arr
          .map((el) => ({
            quote: el.split('--')[0].trim(),
            author: el.split('--')[1].trim(),
          }))
          .filter((el) => el.author === author);
      });
  }
}

module.exports = Quote;
