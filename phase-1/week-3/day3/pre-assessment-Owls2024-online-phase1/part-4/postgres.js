const { Author, Book } = require("./db/models");

const authors = [
  { name: "Bulgakov Mikhail", age: 24 },
  { name: "Wilde Oscar", age: 31 },
  { name: "Dostoevsky Fyodor", age: 22 },
];
const books = [
  { title: "Master and Margarita", countPage: 512, authorId: 1 },
  { title: "The Picture of Dorian Grey", countPage: 320, authorId: 2 },
  { title: "Crime and Punishment", countPage: 640, authorId: 3 },
];

async function createAuthors() {
  const seedAuthors = authors.map((author) => {
    author.createdAt = new Date();
    author.updatedAt = new Date();
    return author;
  });
  try {
    console.log(await Author.bulkCreate(seedAuthors));
  } catch (err) {
    console.error(err);
  }

  return seedAuthors;
}

async function createBooks() {
  const seedBook = books.map((book) => {
    book.createdAt = new Date();
    book.updatedAt = new Date();
    return book;
  });

  try {
    console.log(await Book.bulkCreate(seedBook));
  } catch (err) {
    console.error(err);
  }

  return seedBook;
}
createBooks()
async function findAllBooks() {
  try {
    const books = await Book.findAll();
    const data = books.map((Book) => Book.get());
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function findAllBooksAuthor() {
  try {
    const books = await Book.findAll({
      where: { authorId: 3 },
      attributes: ["title", "authorId"],
      include: {
        model: Author,
        attributes: ["name"],
      },
    });
    const data = books.map((Book) => Book.get({ plain: true }));
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createAuthors,
  createBooks,
  findAllBooks,
  findAllBooksAuthor,
};
