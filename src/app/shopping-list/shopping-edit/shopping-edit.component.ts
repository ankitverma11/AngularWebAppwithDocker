import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredents } from 'src/app/shared/ingredents.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')  nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
 // ingredientAdded  = new EventEmitter<{name: string,amount : number}>(); 
  @Output() ingredientAdded  = new EventEmitter<Ingredents>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem()
  {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredent = new Ingredents(ingName,ingAmount);
  this.ingredientAdded.emit(newIngredent);
  }
}
