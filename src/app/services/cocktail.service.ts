import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { ICocktailResponse, Drink } from '../models/cocktail.model';

@Injectable({ providedIn: 'root' })
export class CocktailService {

    private apiUrl: string = environment.api;
    constructor(private httpClient: HttpClient) { }

    searchByName(searchTerm: string): Observable<Drink[]> {
        const params = new HttpParams().append("s", searchTerm);
        return this.httpClient.get<ICocktailResponse>(`${this.apiUrl}search.php?`, { params })
            .pipe(map(({ drinks }) => drinks))
    }

    searchByIngredient(ingredient: string): Observable<Drink[]> {
        const params = new HttpParams().append("i", ingredient);
        return this.httpClient.get<ICocktailResponse>(`${this.apiUrl}filter.php?`, { params })
            .pipe(map(({ drinks }) => drinks))
    }

}