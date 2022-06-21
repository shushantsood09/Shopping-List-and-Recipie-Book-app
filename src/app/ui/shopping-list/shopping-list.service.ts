import { EventEmitter } from "@angular/core";
import { ingredient } from "src/app/models/ingredient.model";

export class ShoppingListService {
    ingredientsChange = new EventEmitter<ingredient[]>();
  private ingredients : ingredient[] =[
        new ingredient('Apples', 10),
        new ingredient('Mangoes', 20),
        new ingredient('Bananas', 30)
      ];

      getIngredrient(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
      }

      addIngredients(ingredients : ingredient[]){
        // for( let ingredient of ingredients){
        //     this.addIngredient(ingredient)
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChange.emit(this.ingredients.slice());
      }
}