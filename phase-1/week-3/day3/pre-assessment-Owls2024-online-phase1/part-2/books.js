const { Json } = require("sequelize/lib/utils");

const fs = require("fs").promises;

async function getBooks(path) {
  const result = JSON.parse(await fs.readFile(path, "utf-8"));

  return result;
}

async function isRead({ pathToFileRead, isReadBookId }) {
  let books = await getBooks(pathToFileRead);
  books.forEach((book) => {
    if (book.id === isReadBookId) {
      book.isRead = true;
    } else {
      book.isRead = false;
    }
  });

  return books;
}

async function writeFile(pathToFileRead, pathToFileWrite) {
  let books = await getBooks(pathToFileRead);
  let text = "";

  books.forEach((book, index) => {
    if (index === books.length - 1) {
      text += `№${book.id} ${book.name} - ${book.numberOfPages} страниц`;
    } else {
      text += `№${book.id} ${book.name} - ${book.numberOfPages} страниц\r\n`;
    }
  });

  fs.writeFile(pathToFileWrite, text);
}

module.exports = {
  getBooks,
  isRead,
  writeFile,
};
