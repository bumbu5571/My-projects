const Book = require("../Book");
const BookClub = require("../BookClub");

describe("Part-1", () => {
  let book1;
  let book2;
  let book3;
  let book4;
  let book5;
  let bookClub1;
  let bookClub2;

  beforeEach(() => {
    book1 = new Book({
      name: "Master and Margarita",
      numberOfPages: 512,
      author: "Bulgakov Mikhail",
      rating: 5,
    });
    book2 = new Book({
      name: "The Picture of Dorian Grey",
      numberOfPages: 320,
      author: "Wilde Oscar",
      rating: 7,
    });
    book3 = new Book({
      name: "Crime and Punishment",
      numberOfPages: 640,
      author: "Dostoevsky Fyodor",
      rating: 4,
    });
    book4 = new Book({
      name: "Hero of our time",
      numberOfPages: 224,
      author: "Lermontov Mikhail",
      rating: 8,
    });

    bookClub1 = new BookClub({ readBooks: [book1] });
    bookClub2 = new BookClub({
      readBooks: [book1, book2, book3],
      waitingList: [book4],
    });
  });

  describe("класс Book", () => {
    it("проверка конструктора Book", () => {
      book5 = new Book({
        name: "About witchcraft and love",
        author: "Kuprin Alexander",
        numberOfPages: 320,
        rating: 3,
      });
      expect(book5.author).toBe("Kuprin Alexander");
      expect(book5.rating).toBe(3);
    });
  });

  describe("класс BookClub", () => {
    it("проверка конструктора BookClub", () => {
      expect(bookClub1.readBooks).toEqual([book1]);
      expect(bookClub1.waitingList).toEqual([]);
    });
    describe("ratingBooks", () => {
      it("метод ratingBooks возвращает все прочитанные книги отсортированные по рейтингу в порядке убывания", () => {
        const sortBooks = bookClub2.ratingBooks();
        expect(sortBooks[0].name).toBe("The Picture of Dorian Grey");
        expect(sortBooks[2].name).toBe("Crime and Punishment");
      });
    });
    describe("addBook", () => {
      it("метод addBook добавляет книгу в список листа ожидания и возвращает true", () => {
        expect(bookClub2.addBook(book5)).toBe(true);
        expect(bookClub2.waitingList).toEqual([book4, book5]);
      });

      it("не добавляет книгу в список листа ожидания и возвращает false, если такая книга уже в нем есть", () => {
        expect(bookClub2.addBook(book4)).toBe(false);
        expect(bookClub2.waitingList).toEqual([book4]);
      });
    });

    describe("bookReading", () => {
      it("метод bookReading переносит книгу из листа ожидания в прочитанные и возвращает колличество страниц в прочитанной книге", () => {
        expect(bookClub2.bookReading("Hero of our time")).toBe(224);
        expect(bookClub2.readBooks).toEqual([book1, book2, book3, book4]);
        expect(bookClub2.waitingList).toEqual([]);
      });
    });
  });
});
