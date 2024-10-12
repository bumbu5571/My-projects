import { Mammal } from "./mammal.js";

export class Parrot extends Mammal {
  constructor(name, age, canSpeak) {
    super(name)
    this.age = age
    this.canSpeak = canSpeak
  }

  speak() {
    if (this.canSpeak) {
      return "What's up buddy"
    }
    return `Sorry, ${this.name} can't speak`
  }

  sing() {
    console.log("la-la-la")
  }
}
