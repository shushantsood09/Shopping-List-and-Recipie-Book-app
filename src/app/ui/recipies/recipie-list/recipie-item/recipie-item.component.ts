import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipie } from 'src/app/models/recipie.model';
import { RecipieService } from '../../recipies.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie!: Recipie;
  @Output() recipieSelected = new EventEmitter<void>()
  constructor(
    private recipieService : RecipieService
  ) { }

  ngOnInit(): void {
  }

  onSelected() {
    // this.recipieSelected.emit();
    this.recipieService.recipieSelected.emit(this.recipie);
  }
}
