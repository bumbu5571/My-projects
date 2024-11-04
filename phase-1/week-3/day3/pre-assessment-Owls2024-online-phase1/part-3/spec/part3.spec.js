const { pageCount, authorCount, toString } = require('../objects');

describe('Part-3', () => {
  const books = [
    {
      id: 1,
      name: 'Master and Margarita',
      numberOfPages: 512,
      author: 'Bulgakov Mikhail',
      rating: 5,
    },
    {
      id: '2',
      name: 'The Picture of Dorian Grey',
      numberOfPages: 320,
      author: 'Wilde Oscar',
      rating: 5,
    },
    {
      id: 3,
      name: 'Crime and Punishment',
      numberOfPages: '640',
      author: 'Dostoevsky Fyodor',
      rating: 4,
    },
    {
      id: 4,
      name: 'Hero of our time',
      numberOfPages: '224',
      author: 'Lermontov Mikhail',
      rating: 4,
    },
    {
      id: 5,
      name: 'White Nights',
      numberOfPages: 320,
      author: 'Dostoevsky Fyodor',
      rating: 5,
    },
    {
      id: '6',
      name: 'Morphine',
      numberOfPages: '320',
      author: 'Bulgakov Mikhail',
      rating: 4,
    },
  ];
  describe('функция pageCount', () => {
    it('возвращает общее колличество страниц во всех книгах', () => {
      expect(pageCount(books)).toEqual(2336);
      expect(pageCount([])).toEqual(0);
    });
  });

  describe('функция authorCount', () => {
    it('возвращает  обьект где ключем является имя автора а значением кол-во книг у нас в списке', () => {
      expect(authorCount(books)).toEqual({
        'Bulgakov Mikhail': 2,
        'Wilde Oscar': 1,
        'Dostoevsky Fyodor': 2,
        'Lermontov Mikhail': 1,
      });
      expect(authorCount([])).toEqual({});
    });
  });

  describe('функция toString', () => {
    it('возвращает массив с книгами, где все значения меняются на тип string', () => {
      const res = toString([]);
      const res2 = toString(books);
      expect(res).toEqual([]);
      expect(res2[4]).toEqual({
        id: '5',
        name: 'White Nights',
        numberOfPages: '320',
        author: 'Dostoevsky Fyodor',
        rating: '5',
      });
      expect(res2[5]).toEqual({
        id: '6',
        name: 'Morphine',
        numberOfPages: '320',
        author: 'Bulgakov Mikhail',
        rating: '4',
      });
    });
  });
});
