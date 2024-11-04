const fs = require("fs").promises;

async function readLogs() {
  let text = (await fs.readFile(`${__dirname}/logs.txt`, "utf-8")).split(
    "#####"
  );

  return text;
}

async function countMessages(request) {
  request = request[0].toUpperCase() + request.slice(1);

  const array = await readLogs();
  let result = 0;

  array.forEach((el) => {
    if (el.includes(request)) result++;
  });
  return result;
}

async function writeSummary() {
  let text = `info:${await countMessages("info")}\nerror:${await countMessages(
    "error"
  )}\nwarning:${await countMessages("warning")}`;

  fs.writeFile(`${__dirname}/result.txt`, text);
}

module.exports = { writeSummary, countMessages, readLogs };
