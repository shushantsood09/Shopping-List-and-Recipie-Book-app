import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from 'src/app/models/recipie.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
 @Input() recipie!: Recipie;
  constructor(private recipieService: RecipieService) { }

  ngOnInit(): void {
  }
  onAddShoppingList(){
    this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients)

  }
}
