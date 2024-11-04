const fs = require("fs");
const path = require("path");

const {
  readFileAndProcess,
  getSortedWords,
  getUniqueWords,
  stringToTitleCase,
} = require("../app");

describe("readFileAndProcess", () => {
  const testReadPath = path.join(__dirname, "./test.txt");
  const readPath = path.join(__dirname, "../words.txt");
  const writePath = path.join(__dirname, "./output.txt");

  beforeEach(() => fs.writeFileSync(writePath, "", "utf-8"));

  it("функция возвращает промис", (done) => {
    const result = readFileAndProcess(testReadPath, writePath, (data) => data);
    expect(typeof result.then).toBe("function");
    expect(typeof result.finally).toBe("function");
    result.finally(done);
  });

  it("вызывает колбэк-функцию после успешного прочтения файла, передаёт в неё список слов из файла в виде массива", (done) => {
    readFileAndProcess(testReadPath, writePath, (data) => {
      expect(data).toEqual(["This", "is", "a", "test", "file"]);
      return data;
    }).finally(done);
  });

  it("с колбэком getUniqueWords записывает в файл только неповторяющиеся слова", (done) => {
    readFileAndProcess(readPath, writePath, getUniqueWords).then(() => {
      const output = fs.readFileSync(writePath, "utf8");
      expect(output).toEqual(
        "git sql bash node react redux angular vue html css javascript typescript python ruby java php swift kotlin rust go haskell lua scala perl cobol fortran"
      );
      done();
    });
  });

  it("с колбэком getSortedWords записывает в файл слова длиной 5 символов и более в алфавитном порядке без повторений", (done) => {
    readFileAndProcess(readPath, writePath, getSortedWords).then(() => {
      const output = fs.readFileSync(writePath, "utf8");
      expect(output).toEqual(
        "angular cobol fortran haskell javascript kotlin python react redux scala swift typescript"
      );
      done();
    });
  });

  it("с колбэком stringToTitleCase делает первую букву каждого слова заглавной и записывает слова в файл в алфавитном порядке", (done) => {
    readFileAndProcess(readPath, writePath, stringToTitleCase).then(() => {
      const output = fs.readFileSync(writePath, "utf8");
      expect(output).toEqual(
        "Angular Angular Bash Cobol Css Css Fortran Git Go Haskell Html Java Javascript Javascript Kotlin Lua Node Perl Php Python React React Redux Ruby Ruby Rust Scala Sql Swift Typescript Vue"
      );
      done();
    });
  });
});
