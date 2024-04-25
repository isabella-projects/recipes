interface RecipeInterface {
    name: string;
    description: string;
    imagePath: string;
}

export class Recipe implements RecipeInterface {
    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
    ) {}
}
