const path = require('path');
const fs = require('fs/promises');
const { writeSummary, countMessages, readLogs } = require('../logs');

describe('Part 2 tests', () => {
  let initLogs;
  beforeEach(async () => {
    initLogs = await fs.readFile(path.resolve(__dirname, './initLogs.txt'), 'utf-8');
    await fs.writeFile(path.resolve(__dirname, '../logs.txt'), initLogs, 'utf-8');
  });

  describe('Все функции', () => {
    it('возвращают промис', async () => {
      const readResult = readLogs();
      expect(readResult.toString()).toBe('[object Promise]');
      expect(readResult.then).toBeDefined();

      const countResult = countMessages('info');
      expect(countResult.toString()).toBe('[object Promise]');
      expect(countResult.then).toBeDefined();

      const writePromise = writeSummary();
      expect(writePromise.toString()).toBe('[object Promise]');
      expect(writePromise.then).toBeDefined();

      await readResult;
      await countResult;
      await writePromise;
    });
  });

  describe('Функция readLogs', () => {
    it('Читает файл и возвращает массив строк', async () => {
      const logs = await readLogs();
      expect(logs).toEqual(expect.any(Array));
      expect(logs[0]).toEqual(expect.any(String));
      expect(logs.length).toBe(9);
    });

    it('Строки -- логи из файла', async () => {
      const logs = await readLogs();
      expect(logs.every((log) => !log.includes('#'))).toBe(true);

      expect(logs[0]).toContain('Invalid or unexpected token');
      expect(logs[1]).toContain('Cannot read properties of undefined (reading \'name\')');
      expect(logs[2]).toContain('at Object.require (/part-7/logs.js:15:1)');
      expect(logs[3]).toContain('upgrade to the latest version');
      expect(logs[4]).toContain('at internalCompileFunction (node:internal/vm:73:18)');
      expect(logs[5]).toContain('at Object.toBe (anonymous.js:20:30)');
    });
  });

  describe('Функция countMessages', () => {
    it('Возвращает количество ошибок', async () => {
      const errors = await countMessages('error');
      expect(errors).toEqual(4);
    });
    it('Возвращает количество предупреждений', async () => {
      const warnings = await countMessages('warning');
      expect(warnings).toEqual(3);
    });
    it('Возвращает количество информационных сообщений', async () => {
      const info = await countMessages('info');
      expect(info).toEqual(2);
    });
  });

  describe('Функция writeSummary', () => {
    it('Записывает результат в файл', async () => {
      await writeSummary();
      const result = await fs.readFile(path.resolve(__dirname, '../result.txt'), 'utf-8');
      expect(result).toEqual('info:2\nerror:4\nwarning:3');
    });

    it('Корректно работает для разных случаев', async () => {
      const newLogs = `${initLogs}\n#####\nNetworkError: failed to fetch\n#####\nNode Info: new npm version is available`;
      await fs.writeFile(path.resolve(__dirname, '../logs.txt'), newLogs, 'utf-8');
      await writeSummary();
      const result = await fs.readFile(path.resolve(__dirname, '../result.txt'), 'utf-8');
      expect(result).toEqual('info:3\nerror:5\nwarning:3');
    });
  });
});
