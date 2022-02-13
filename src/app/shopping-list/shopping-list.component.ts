import { Component, OnInit } from '@angular/core';
import { Ingredents } from '../shared/ingredents.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
   ingredients : Ingredents[] = [
     new Ingredents ('Apples',5),
     new Ingredents ('Mangoes', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
