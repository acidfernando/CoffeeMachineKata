import { DrinkBuilderInterface } from "./DrinkBuilderInterface.js"

export class DrinkBuilder implements DrinkBuilderInterface{
  private drink:string|null = null
  private sugar:number = 0

  build() {
    return {drink: this.drink, sugar:this.sugar}
  }

  incrementSugar() {
    this.sugar = this.sugar + 1
  }

  setDrink(drink:string){
    this.drink = drink
  }
}
