export interface ICocktailResponse {
    drinks?: Drink[]
}

export class Drink {
    idDrink: number;
    strDrink: string;
    strDrinkAlternate: string;
    strTags: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strImageSource: string;
    strImageAttribution: string;

    public get isAlcoholic() {
        return this.strAlcoholic.toLowerCase().includes("alcohol") ? true : false
    }

}