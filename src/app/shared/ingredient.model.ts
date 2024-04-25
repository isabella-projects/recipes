interface IngredientInterface {
    name: string;
    amount: number;
}

export class Ingredient implements IngredientInterface {
    constructor(
        public name: string,
        public amount: number,
    ) {}
}
