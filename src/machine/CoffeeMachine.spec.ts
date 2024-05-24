import { CoffeeMachine } from "./CoffeeMachine.js";
import { expect, describe, it } from "vitest";
import { DrinkBuilder } from "./DrinkBuilder.js";

describe("CoffeeMachine", () => {
  it('can increment sugar', () => {
    const drinkBuilder = new DrinkBuilder()
    const coffeeMachine = new CoffeeMachine(drinkBuilder)
    coffeeMachine.incrementSugar()

    expect(drinkBuilder.build()).toEqual(1)
  })
  it("Drink maker makes 1 tea with 1 sugar and a stick", () => {
    const coffeeMachine = new CoffeeMachine()
    coffeeMachine.selectTea()
    coffeeMachine.incrementSugar()
    coffeeMachine.makeDrink()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T:1:0")
  })
})
