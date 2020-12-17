import { TestBed, async } from '@angular/core/testing';
import { CocktailService } from './cocktail.service';


describe('CocktailService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                CocktailService
            ],
        }).compileComponents();
    }));



});
