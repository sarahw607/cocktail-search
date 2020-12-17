import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.scss']
})
export class CocktailSearchComponent {
  @Input() labelText: string;
  @Output() readonly search = new EventEmitter<string>();
  searchTerm: string;

  onDoSearch() {
    this.search.emit(this.searchTerm)
    this.searchTerm = '';
  }

}
