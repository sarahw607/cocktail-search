import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from './models/cocktail.model';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cocktailService: CocktailService) { }

  searchResults$: Observable<Drink[]>;
  getCocktailsByName(searchTerm: string) {
    this.searchResults$ = this.cocktailService.searchByName(searchTerm)
  }

  getCocktailsByIngredient(searchTerm: string) {
    this.searchResults$ = this.cocktailService.searchByName(searchTerm)
  }
}
