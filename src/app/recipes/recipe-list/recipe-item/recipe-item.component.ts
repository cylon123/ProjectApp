import { Component, OnInit,Input, Output, EventEmitter,ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService : RecipeService) {  }
  @Input('recipe') reciper : Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  ngOnInit() {
    console.log("Hello");
  }
  OnRecipeSelection(){
    //this.recipeSelected.emit();
    this.recipeService.selectedRecipe.emit(this.reciper);
  }
}
