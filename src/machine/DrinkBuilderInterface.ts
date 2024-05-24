export interface DrinkBuilderInterface  {
    build():{drink: string|null, sugar: number}
    incrementSugar():void
}