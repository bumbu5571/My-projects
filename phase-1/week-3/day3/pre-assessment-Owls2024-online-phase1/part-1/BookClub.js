module.exports = class BookClub {
  constructor({ readBooks = [], waitingList = [] }) {
    this.readBooks = readBooks;
    this.waitingList = waitingList;
  }

  ratingBooks() {
    return this.readBooks.sort((a, b) => b.rating - a.rating);
  }

  addBook(book) {
    let result = this.waitingList.includes(book);
    if (result) {
      result = false;
    } else {
      result = true;
      this.waitingList.push(book);
    }
    return result;
  }

  bookReading(nameBook) {
    const index = this.waitingList.forEach((book, index) => {
      book.name === nameBook;
      return index;
    });

    const book = this.waitingList.splice(index, 1);

    this.readBooks.push(book[0]);

    return book[0].numberOfPages;
  }
};
