import { DrinkBuilder } from "./DrinkBuilder.js";

export class CoffeeMachine{
  constructor(private readonly drinkBuild: DrinkBuilder) {}

  selectTea (){
    this.drinkBuild.setDrink("tea")
  }

  incrementSugar(){
    this.drinkBuild.incrementSugar()
  }

  makeDrink(){}


}
