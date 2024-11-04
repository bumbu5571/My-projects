const { Author } = require('../Author');
const { Book } = require('../Book');
const { Library } = require('../Library');

describe('Library', () => {
  let library;
  let author1;
  let author2;
  let book1;
  let book2;
  let book3;

  beforeEach(() => {
    author1 = new Author('John', 'Doe', '1980-01-01');
    author2 = new Author('Jane', 'Smith', '1970-01-01', '2020-01-01');
    book1 = new Book('JavaScript for Beginners', author1, 'Programming', 2010);
    book2 = new Book('Advanced JavaScript', author2, 'Programming', 2015);
    book3 = new Book('A Brief History of Time', author1, 'Science', 1988);
    library = new Library([book1, book2, book3]);
  });

  test('если в конструктор не передать список книг, то все будет работать нормально', () => {
    library = new Library();
    library.addBook(book1);
    expect(library.books.length).toBe(1);
    expect(library.books).toContain(book1);
  });

  test('метод addBook() должен корректно добавлять книги', () => {
    const book = new Book('Chaos: Making a New Science', author2, 'Science', 2015);
    library.addBook(book);
    expect(library.books.length).toBe(4);
    expect(library.books).toContain(book);
  });

  test('метод removeBook() должен корректно удалять книги', () => {
    library.removeBook(book1);
    expect(library.books.length).toBe(2);
    expect(library.books).not.toContain(book1);
  });

  test('метод findByTitle() должен находить книги по названию', () => {
    const foundBooks = library.findByTitle('JavaScript');
    expect(foundBooks.length).toBe(2);
    expect(foundBooks).toEqual([book1, book2]);
  });

  test('метод findByAuthor() должен находить книги по автору', () => {
    const foundBooks = library.findByAuthor(author1);
    expect(foundBooks.length).toBe(2);
    expect(foundBooks).toEqual([book1, book3]);
  });

  test('should find books by genre', () => {
    const foundBooks = library.findByGenre('Science');
    expect(foundBooks.length).toBe(1);
    expect(foundBooks).toEqual([book3]);
  });

  test('метод showBooksList() возвращает массив строк с порядковым номером и названием', () => {
    const booksList = library.showBooksList();
    expect(booksList.length).toBe(3);
    expect(booksList).toEqual(['1 JavaScript for Beginners', '2 Advanced JavaScript', '3 A Brief History of Time']);
  });
});
