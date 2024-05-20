import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
    private readonly placeholderImg: string = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg';

    protected recipes: Recipe[] = [
        new Recipe('Gulasch', 'Traditional soup, extremely tasty!', this.placeholderImg),
        new Recipe('Wiener Schnitzel', 'The Austrian special dish', this.placeholderImg),
    ];

    constructor() {}
}
