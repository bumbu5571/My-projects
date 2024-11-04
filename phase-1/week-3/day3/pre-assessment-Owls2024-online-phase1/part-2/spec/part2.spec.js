const path = require('path');
const fs = require('fs').promises;
const { EOL } = require('os');
const { getBooks, isRead, writeFile } = require('../books');

describe('Part 2', () => {
  let pathToFileRead;
  let pathToFileWrite;

  beforeEach(() => {
    pathToFileRead = path.join(__dirname, '..', 'data/books.json');
    pathToFileWrite = path.join(__dirname, '..', 'data/booksWrite.txt');
  });

  describe('функция getBooks', () => {
    it('возвращает Promise', () => {
      const promise = getBooks(pathToFileRead);
      expect(promise).toBeInstanceOf(Promise);
    });

    it('возвращает массив объектов', async () => {
      const result = await getBooks(pathToFileRead);
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(4);
      expect(result[0].author).toBe('Bulgakov Mikhail');
      expect(result[2].author).toBe('Dostoevsky Fyodor');
    });
  });

  describe('функция isRead', () => {
    it('использует внутри себя функцию getBooks', async () => {
      expect(isRead.toString()).toContain('getBooks');
    });

    it('возвращает массив книг, добавляя каждой книге поле isRead = false, а прочитанной книге isRead = true', async () => {
      const result = await isRead({ pathToFileRead, isReadBookId: 3 });
      expect(result[0].isRead).toBe(false);
      expect(result[2].isRead).toBe(true);
    });

    describe('Функция writeFile', () => {
      it('использует внутри себя функцию getBooks', async () => {
        expect(writeFile.toString()).toContain('getBooks');
      });

      it('должна создать запись в файл', async () => {
        await writeFile(pathToFileRead, pathToFileWrite);

        const content = await fs.readFile(pathToFileWrite, 'utf-8');
        const lines = content.split(`${EOL}`);
        expect(lines).toHaveLength(4);
        expect(lines[0]).toBe('№1 Master and Margarita - 512 страниц');
        expect(lines[1]).toBe('№2 The Picture of Dorian Grey - 320 страниц');
      });
    });
  });
});
