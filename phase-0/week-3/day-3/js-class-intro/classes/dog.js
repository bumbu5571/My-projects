import { Mammal } from "./mammal.js";

export class Dog extends Mammal {
  constructor(name, owner, age, food) {
    super(name);
    this.owner = owner;
    this.age = age;
    this.food = food;
  }

  eats() {
    return `${this.owner}'s dog whos name is ${this.name} eats ${this.food}`;
  }

  isPuppy() {
    return this.age < 0.7;
  }

  info() {
    return `Owner: ${this.owner}, Dog's name: ${
      this.name
    }, isPuppy: ${this.isPuppy(this.age)}`;
  }
}
