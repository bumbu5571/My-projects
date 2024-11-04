const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/crew.txt`, "utf8");
const crew = data.split("\n");

const dataEquipment = fs.readFileSync(`${__dirname}/equipment.txt`, "utf8");
const crewEquipment = dataEquipment.split("\n");

const dataRockets = fs.readFileSync(`${__dirname}/Rockets.txt`, "utf8");
const crewRockets = dataRockets.split("\n");

function getRightCaptain() {
  let experiencedCaptain = null;
  let maxExperience = -1;

  for (let member of crew) {
    let [name, gender, role, experience] = member.split(", ");

    if (role === "Капитан") {
      experience = parseInt(experience);

      if (experience > maxExperience) {
        maxExperience = experience;
        experiencedCaptain = member;
      }
    }
  }

  return experiencedCaptain;
}

function getRightDoc() {
  let experiencedDoc = null;
  let maxExperience = -1;

  for (let member of crew) {
    let [name, gender, role, experience] = member.split(", ");

    if (gender === "ж" && role === "Врач") {
      experience = parseInt(experience);

      if (experience > maxExperience) {
        maxExperience = experience;
        experiencedDoc = member;
      }
    }
  }

  return experiencedDoc;
}

function getAllEngineer() {
  const experiencedEngineer = [];

  for (let member of crew) {
    let [name, gender, role, experience] = member.split(", ");

    if (role === "Бортмеханик") {
      experiencedEngineer.push(member);
    }
  }

  return experiencedEngineer;
}

function getAllRover() {
  const allRover = [];

  for (let member of crewEquipment) {
    let [name, type, age] = member.split(", ");

    if (type === "марсоход") {
      allRover.push(member);
    }
  }

  return allRover;
}

function getRightRovers() {
  const rightRovers = [];

  for (let member of crewEquipment) {
    let [name, type, age] = member.split(", ");

    if (age > 3 && type === "марсоход") {
      rightRovers.push(member);
    }
  }

  return rightRovers;
}

function getRightRocket() {
  let rocket = null;
  let maxRange = -1;

  for (let member of crewRockets) {
    let [name, type, range] = member.split(", ");

    range = parseInt(range);

    if (range > maxRange) {
      maxRange = range;
      rocket = [name, type, range];
    }
  }

  return rocket;
}

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
