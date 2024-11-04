function pageCount(books) {
  return books.reduce((acc, book) => acc + Number(book.numberOfPages), 0);
}

function authorCount(books) {
  return books.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1;
    return acc;
  }, {});
}

function toString(books) {
  return books.map((book) => {
    for (let [key, val] of Object.entries(book)) {
      book[key] = String(val);
    }
    return book;
  });
}

module.exports = {
  pageCount,
  authorCount,
  toString,
};
