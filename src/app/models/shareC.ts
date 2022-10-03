import { Cocktail } from './Cocktail';
export interface ShareC{
  id: number,
  user_id: number,
  type: "Cocktail",
  cocktail: Cocktail,
  sharedUserId: number;

}
