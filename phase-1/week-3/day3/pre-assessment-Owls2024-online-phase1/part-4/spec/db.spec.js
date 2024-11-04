const { createAuthors, createBooks, findAllBooks, findAllBooksAuthor } = require('../postgres');
const { Book, Author } = require('../db/models');

describe('createAuthors', () => {
  beforeEach(async () => {
    await createBooks();
    await createAuthors();
  });

  it('Должен создать книги в базе данных', async () => {
    const createdBooks = await createBooks();
    expect(createdBooks).toHaveLength(3);

    const grey = await Book.findOne({ where: { title: 'The Picture of Dorian Grey' } });
    expect(grey).toBeDefined();
    expect(grey.countPage).toEqual(320);
    expect(grey.authorId).toEqual(2);
  });
});
describe('findAllBooks', () => {
  it('Должен вернуть все книги из базы дынных', async () => {
    const books = await findAllBooks();

    expect(books).toHaveLength(3);

    const master = books.find((book) => book.title === 'Master and Margarita');
    expect(master).toBeDefined();
    expect(master.countPage).toEqual(512);
  });
});
describe('findAllBooksAuthor', () => {
  beforeEach(async () => {
    await Book.destroy({ where: {} });
    await createBooks();
  });

  it('Должен вернуть все книги авторства `Dostoevsky Fyodor` из базы данных', async () => {
    const books = await findAllBooksAuthor();

    expect(books).toHaveLength(1);
    expect(books[0].title).toBe('Crime and Punishment');
  });
});
