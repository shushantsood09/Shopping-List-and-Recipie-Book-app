import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipieListComponent } from './ui/recipies/recipie-list/recipie-list.component';
import { RecipiesComponent } from './ui/recipies/recipies.component';
import { RecipieDetailComponent } from './ui/recipies/recipie-detail/recipie-detail.component';
import { ShoppingListComponent } from './ui/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './ui/shopping-list/shopping-edit/shopping-edit.component';
import { RecipieItemComponent } from './ui/recipies/recipie-list/recipie-item/recipie-item.component';
import { FormsModule } from '@angular/forms';
import { DropdownDiretive } from './shared/directives/dropdown.directive';
import { RecipieService } from './ui/recipies/recipies.service';
import { ShoppingListService } from './ui/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipieItemComponent,
    DropdownDiretive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
