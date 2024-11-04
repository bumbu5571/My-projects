const { name } = require("random-profile-generator");
const fs = require("fs");
const getRandomInteger = require("./getRandomInteger");

function generateNames(current=getRandomInteger()) {
  const result = [];
  const fileName = `./result/${current}-names.txt`;
  fs.writeFileSync(fileName, "");

  for (let i = 0; i < Number(current); i++) {
    result.push(name());
    fs.appendFileSync(fileName, `${result[i]} \n`);
  }
  
  return result;
}

module.exports = generateNames;
