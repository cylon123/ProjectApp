import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.component';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static : false}) inputName : ElementRef;
  @ViewChild('amountInput',{static : false}) inputAmount : ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit() {
  }
  OnAddClick(){
    const ingName = this.inputName.nativeElement.value;
    const ingAmount = this.inputAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.shoppingService.ingredientAddition(newIngredient);
  }
}
