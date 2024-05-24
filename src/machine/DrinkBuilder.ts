export class DrinkBuilder {
  private sugar:number = 0

  build() {
    return this.sugar
  }

  incrementSugar() {
    this.sugar = this.sugar + 1
  }
}
