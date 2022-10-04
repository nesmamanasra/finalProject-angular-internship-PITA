import { Recipe } from 'src/app/models/Recipe';
export interface UserRecipe {
  id: number;
  userId: number;
  type: Recipe;
}
