import { DrinkBuilder } from "./DrinkBuilder.js";

export class CoffeeMachine{
  constructor(private readonly drinkBuild: DrinkBuilder) {}

  selectTea (){}

  incrementSugar(){
    this.drinkBuild.incrementSugar()
  }

  makeDrink(){}


}
