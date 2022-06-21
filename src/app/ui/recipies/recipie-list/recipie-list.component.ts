import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipie } from 'src/app/models/recipie.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  // @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recipies: Recipie[] =[];

  constructor(
    private recipieService: RecipieService
  ) { }

  ngOnInit(): void {
    this.recipies = this.recipieService.getRecipies();
  }

  // onRecipieSelected(recipie : Recipie){
  //   this.recipieWasSelected.emit(recipie);
  // }

}
