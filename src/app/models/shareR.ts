import { Recipe } from './Recipe';
export interface ShareR{
  id: number,
  user_id: number,
  type: "Recipe",
  cocktail: Recipe,
  sharedUserId: number;

}
