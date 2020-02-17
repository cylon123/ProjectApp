import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    emitter = new EventEmitter<Ingredient[]>();
    ingredients: any;
    constructor(private slService : ShoppingListService){}
    selectedRecipe = new EventEmitter<Recipe>();
    private recipe: Recipe[] = [
        new Recipe('Test Recipe',
        'This is a test recipe',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        [new  Ingredient('aaloo',2),
            new Ingredient('matar', 5)
    ]),
        new Recipe('Test Recipe 1','This is a test recipe 1','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        [new Ingredient ('palak',15),new Ingredient('bhindi',10)])];
    getAllRecipe(){
        return this.recipe.slice();
    }
    ingredientAddition(ingredient : Ingredient){
        this.slService.ingredientAddition(ingredient);
    }
}