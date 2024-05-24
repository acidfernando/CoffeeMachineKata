import { CoffeeMachine } from "./CoffeeMachine.js";
import { expect, describe, it } from "vitest";
import { DrinkBuilder } from "./DrinkBuilder.js";

describe("CoffeeMachine", () => {
  it('tea is selected', () => {
    const drinkBuilder = new DrinkBuilder()
    const coffeeMachine = new CoffeeMachine(drinkBuilder)
    coffeeMachine.selectTea()

    expect(drinkBuilder.build()).toEqual({drink: "tea", sugar:0})
  })
  it('can increment sugar', () => {
    const drinkBuilder = new DrinkBuilder()
    const coffeeMachine = new CoffeeMachine(drinkBuilder)
    coffeeMachine.incrementSugar()

    expect(drinkBuilder.build()).toEqual({drink: null, sugar:1})
  })
  it("Drink maker makes 1 tea with 1 sugar and a stick", () => {
    const coffeeMachine = new CoffeeMachine()
    coffeeMachine.selectTea()
    coffeeMachine.incrementSugar()
    coffeeMachine.makeDrink()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T:1:0")
  })
})
