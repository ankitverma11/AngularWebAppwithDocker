import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes : Recipe[] = [
    new Recipe('Test Recipe','Test Desc','../../assets/recipe1.png'),
    new Recipe('Test Recipe new','Test Desc new','assets/recipe1.png')
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
