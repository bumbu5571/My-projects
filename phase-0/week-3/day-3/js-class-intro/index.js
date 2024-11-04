import { Cat } from "./classes/cat.js";
import { Dog } from "./classes/dog.js";

// cat1, cat2 ...
const cat1 = new Cat("Ryzhik", "Abyssinian cat");
console.log(cat1);
console.log(cat1.showInfo());

const cat2 = new Cat("Marusya", "Russian");
console.log(cat2);
console.log(cat2.showInfo());

// dog1, dog2 ...
const dog1 = new Dog("Zeus", "Yana", 5, "meat");
console.log(dog1);
console.log(dog1.eats());
console.log(dog1.isPuppy());
console.log(dog1.info());

const dog2 = new Dog("Elya", "Alesya", 0.5, "milk");
console.log(dog2);
console.log(dog2.eats());
console.log(dog2.isPuppy());
console.log(dog2.info());

export class Fox extends Cat {
  constructor(name, habitat, breed) {
    super(name, breed);
    this.habitat = habitat;
  }

  showInfo() {
    return super.showInfo() + ". " + `Среда обитания: ${this.habitat}`;  
  }

  phrase() {
    console.log("Ur-ur-ur")
  }
}

const fox1 = new Fox("Алиса", "лес", "Вельш-корги");
console.log(fox1);
console.log(fox1.showInfo());

class Wolf extends Dog {
  constructor(name, owner, age, food, woolColor) {
    super(name, owner, age, food);
    this.woolColor = woolColor;
  }

  info() {
    return (
      super.info().replace(/Dog's/, "Wol`f") + ` wool color ${this.woolColor}`
    );
  }
}

const wolf1 = new Wolf("Ocean", "Anneka", 5, "meat", "grey");
console.log(wolf1);
console.log(wolf1.info());

const text = document.createElement("h1");
text.style.textAlign = "center";
document.body.append(text);
text.innerText = "Объект cat1: \n"

for (let key in cat1) {
  text.innerText += `${key}: ${cat1[key]}\n`;
}
text.innerText += `Методы: ${(Object.getOwnPropertyNames(cat1.__proto__))} \n`;
text.innerText += `Методы родителя: ${(Object.getOwnPropertyNames(cat1.__proto__.__proto__))} \n`;

text.innerText += "\nОбъект cat2:\n"
for (let key in cat2) {
  text.innerText += `${key}: ${cat2[key]}\n`;
}
text.innerText += `Методы: ${(Object.getOwnPropertyNames(cat2.__proto__))} \n`;
text.innerText += `Методы родителя: ${(Object.getOwnPropertyNames(cat2.__proto__.__proto__))} \n`;

text.innerText += "\nОбъект dog1:\n"
for (let key in dog1) {
  text.innerText += `${key}: ${dog1[key]}\n`;
}
text.innerText += `Методы: ${(Object.getOwnPropertyNames(dog1.__proto__))} \n`;
text.innerText += `Методы родителя: ${(Object.getOwnPropertyNames(dog1.__proto__.__proto__))} \n`;

text.innerText += "\nОбъект dog2:\n"
for (let key in dog2) {
  text.innerText += `${key}: ${dog2[key]}\n`;
}
text.innerText += `Методы: ${(Object.getOwnPropertyNames(dog2.__proto__))} \n`;
text.innerText += `Методы родителя: ${(Object.getOwnPropertyNames(dog2.__proto__.__proto__))} \n`;

text.innerText += "\nОбъект fox1:\n"
for (let key in fox1) {
  text.innerText += `${key}: ${fox1[key]}\n`;
}
text.innerText += `Методы: ${(Object.getOwnPropertyNames(fox1.__proto__))} \n`;
text.innerText += `Методы родителя: ${(Object.getOwnPropertyNames(fox1.__proto__.__proto__))} \n`;

text.innerText += "\nОбъект wolf:\n"
for (let key in wolf1) {
  text.innerText += `${key}: ${wolf1[key]}\n`;
}
text.innerText += `Методы: ${(Object.getOwnPropertyNames(wolf1.__proto__))} \n`;
text.innerText += `Методы родителя: ${(Object.getOwnPropertyNames(wolf1.__proto__.__proto__))} \n`;
