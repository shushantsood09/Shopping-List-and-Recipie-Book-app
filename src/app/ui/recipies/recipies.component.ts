import { Component, OnInit } from '@angular/core';
import { Recipie } from 'src/app/models/recipie.model';
import { RecipieService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipie!: Recipie;
  constructor(
    private recipieService: RecipieService
  ) { }

  ngOnInit(): void {
    this.recipieService.recipieSelected.subscribe((recipie: Recipie)=>{
      this.selectedRecipie = recipie;
    })
  }

}
