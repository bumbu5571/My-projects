class Library {
  constructor(books = []) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  findByTitle(title) {
    return this.books.filter((book) => book.title.match(title,"g"));
  }

  findByAuthor(author) {
    return this.books.filter((book) => book.author == author);
  }

  findByGenre(genre) {
    return this.books.filter((book) => book.genre.match(genre,"g"))
  }

  showBooksList() {
    const list = [];
    this.books.forEach((book,index) => {
      list.push(`${index+1} ${book.title}`)
    })
    return list;
  }
}

module.exports = { Library };
