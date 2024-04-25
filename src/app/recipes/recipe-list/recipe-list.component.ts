import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
    protected recipes: Recipe[] = [
        new Recipe(
            'Gulasch',
            'Very good eating.',
            'https://img.chefkoch-cdn.de/rezepte/431091134310048/bilder/1509751/crop-960x540/gulasch-nach-oma-magda.jpg',
        ),
    ];

    constructor() {}
}
