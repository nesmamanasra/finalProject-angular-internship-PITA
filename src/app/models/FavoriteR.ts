import { Recipe } from './Recipe';
import { Cocktail } from './Cocktail';

export interface FavoriteR {
    id: string,
    user_id: any,
    type:  Recipe,
    type_name:"Recipe"
}
