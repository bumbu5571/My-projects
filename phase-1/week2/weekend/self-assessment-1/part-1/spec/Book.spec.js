const { Author } = require('../Author');
const { Book } = require('../Book');

describe('Book', () => {
  let author;
  let book;

  beforeEach(() => {
    author = new Author('John', 'Doe', '1980-01-01');
    book = new Book('JavaScript for Beginners', author, 'Programming', 2010);
  });

  test('should correctly set the title of the book', () => {
    expect(book.title).toBe('JavaScript for Beginners');
  });

  test('should correctly set the author of the book', () => {
    expect(book.author).toBe(author);
  });

  test('should correctly set the genre of the book', () => {
    expect(book.genre).toBe('Programming');
  });

  test('should correctly set the year of the book', () => {
    expect(book.year).toBe(2010);
  });
});
