const Quote = require('./src/Quote');
const fs = require('fs').promises;
const path = require('path');
const argv = process.argv;

function generatorRandomQuotes() {
  Quote.getRandomQuote()
    .then((date) => {
      fs.writeFile(
        path.join(__dirname, './quotes/random.txt'),
        `${date.quote}\n\n${'-- ' + date.author}`,
      );
    })
    .catch((err) => {
      try {
        fs.appendFile(
          path.join(__dirname, './errors/fn-generatorRandomQuotes.txt'),
          `${err}\n`,
        );
      } catch {
        fs.writeFile(
          path.join(__dirname, './errors/fn-generatorRandomQuotes.txt'),
          `${err}\n`,
        );
      }
    });
}

function generatorNQuotes(n = argv[2]) {
  if (n >= 1 && n <= 10) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(
        Quote.getRandomQuote().then((date) => {
          return date;
          /*  throw new Error('Ошибка чтения'); // Тест на ошибки */
        }),
      );
    }

    Promise.allSettled(array).then((date) => {
      let str = '';
      date.forEach((el, index) => {
        if (el.status === 'fulfilled') {
          str += el.value.quote + '\n\n' + '-- ' + el.value.author + '\n\n';
        }
        //Ловим ошибки
        if (el.status === 'rejected') {
          try {
            fs.appendFile(
              path.join(__dirname, './errors/fn-generatorNQuotes.txt'),
              `${el.reason}\n`,
            );
          } catch {
            fs.writeFile(
              path.join(__dirname, './errors/fn-generatorNQuotes.txt'),
              `${el.reason}\n`,
            );
          }
        }
      });
      const result = str.trim();

      fs.writeFile(path.join(__dirname, `./quotes/random-${n}.txt`), result);
    });
  } else {
    return 'Введите число от 1 до 10';
  }
}

function generatorQuotesByAuthors(
  name1 = argv[2],
  name2 = argv[3],
  name3 = argv[4],
) {
  Promise.race([
    Quote.getAuthorQuotes(name1),
    Quote.getAuthorQuotes(name2),
    Quote.getAuthorQuotes(name3),
  ])
    .then((date) => {
      let result = [];
      date.forEach((el) => result.push(el.quote));

      fs.writeFile(
        path.join(__dirname, `./quotes/${date[0].author}.txt`),
        `${result.join('\n\n')}`,
      );
    })
    .catch((err) => {
      try {
        fs.appendFile(
          path.join(__dirname, './errors/fn-generatorQuotesByAuthors.txt'),
          `${err}\n`,
        );
      } catch {
        fs.writeFile(
          path.join(__dirname, './errors/fn-generatorQuotesByAuthors.txt'),
          `${err}\n`,
        );
      }
    });
}

