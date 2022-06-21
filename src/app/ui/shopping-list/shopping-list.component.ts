import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients : ingredient[] =[];

  constructor(
    private slService: ShoppingListService,
  ) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredrient();
    this.slService.ingredientsChange.subscribe((ingredient)=>{
        this.ingredients = ingredient;
    })
  }
  // onGettingIngredient(ingredient : ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
