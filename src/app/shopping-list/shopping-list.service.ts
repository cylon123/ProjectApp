import { Ingredient } from '../shared/ingredient.component';
import { EventEmitter } from '@angular/core';
export class ShoppingListService{
    emitter = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];
    getShoppingList(){
        return this.ingredients.slice();
    }
    ingredientAddition(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.emitter.emit(this.ingredients);
    }
}