import { Cocktail } from './Cocktail';
import { Recipe } from './Recipe';
export interface Rating {
  id: string,
  user_id: number,
  card_id:string,
  rating:number,
  type_name:"Rating",
  type:Recipe|Cocktail;

}
