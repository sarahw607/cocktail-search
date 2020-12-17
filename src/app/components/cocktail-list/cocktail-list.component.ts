import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../../models/cocktail.model';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  @Input() searchResults$: Observable<Drink[]>;

  constructor() { }
}
