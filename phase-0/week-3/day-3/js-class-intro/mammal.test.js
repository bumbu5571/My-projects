import jest from 'jest'
import {Parrot} from "./classes/parrot.js";
import {Fox} from "./index.js"

describe("Тесты для класса Parrot", () => {
  let golubchik, kesha

  beforeEach(() => {
    golubchik = new Parrot("Голубчик", 2, false)
    kesha = new Parrot("Кеша", 1, true)
  })

  it("Возвращает => Голубчик", () => {
    expect(golubchik.name).toEqual("Голубчик")
  })

  it("Возвращает => 2", () => {
    expect(golubchik.age).toBe(2)
  })

  it("Возвращает => Sorry, Голубчик can't speak", () => {
    expect(golubchik.speak()).toEqual("Sorry, Голубчик can't speak")
  })

  it("Возвращает => undefined", () => {
    expect(golubchik.sing()).toBeUndefined()
  })

  it("Возвращает => What's up buddy", () => {
    expect(kesha.speak()).toEqual("What's up buddy")
  })
})

describe("Тесты для класса Fox", () => {
  let red, redhead

  beforeEach(() => {
    red = new Fox("Красная", "Лес", "Дикая")
    redhead = new Fox("Рыжая", "Камчатка", "Лиса-огневка")
  })

  it("Возвращает => Красная", () => {
    expect(red.name).toEqual("Красная")
  })

  it("Возвращает => Лес", () => {
    expect(red.habitat).toBe("Лес")
  })

  it("Возвращает => Порода: Дикая. Имя Красная. Среда обитания: Лес", () => {
    expect(red.showInfo()).toEqual("Порода: Дикая. Имя Красная. Среда обитания: Лес")
  })

  it("Возвращает => undefined", () => {
    expect(redhead.phrase()).toBeUndefined()
  })

  it("Возвращает => Порода: Лиса-огневка. Имя Рыжая. Среда обитания: Камчатка", () => {
    expect(redhead.showInfo()).toEqual("Порода: Лиса-огневка. Имя Рыжая. Среда обитания: Камчатка")
  })
})
