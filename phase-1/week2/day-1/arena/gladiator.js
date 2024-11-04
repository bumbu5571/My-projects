const fs = require("fs");

const date = fs.readFileSync("./weaponsWarehouse/weapons.txt", "utf-8");
const weapon = date.trim().split("\n");

class Gladiator {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.sp = 100;
    this.strength = 1;
    this.level = 1;
    this.exp = 0;
    this.weapon;
  }
}

const gladiator = new Gladiator("leonid")

module.exports = { gladiator };
