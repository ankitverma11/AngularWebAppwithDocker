import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes : Recipe[] = [
    new Recipe('Test Recipe','Test Desc','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Test Recipe new','Test Desc new','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ]
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe)
  {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
