import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.component';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getShoppingList();
    this.shoppingService.emitter.subscribe((ingredients : Ingredient[]) => {this.ingredients = ingredients;})
  }
  // AddedIngredient(Event : any){
  //   this.ingredients.push(Event);
  // }
}
