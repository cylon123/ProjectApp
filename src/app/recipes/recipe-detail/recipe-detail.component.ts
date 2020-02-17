import { Component, OnInit, Input,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.component';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,AfterViewInit {
  @ViewChild('button',{static : false}) buttonRef : ElementRef;
  @ViewChild('ingrediente',{static :false}) ingRef : ElementRef;
  constructor(private recipeService : RecipeService) { }
  @Input() recipe: Recipe;
  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log(this.buttonRef);
  }
  AddItemToShoppingList(){
      // this.shoppingListservice.ingredientAddition(ingredient);
      this.recipe.ingredients.forEach((ingredient : Ingredient) => {
        this.recipeService.ingredientAddition(ingredient);
      });
  }
}
