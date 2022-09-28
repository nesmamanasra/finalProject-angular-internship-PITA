import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/models/Recipe';
import { FavoriteC } from './../models/FavoriteC';
import { Cocktail } from './../models/Cocktail';
import { FavoriteR } from './../models/FavoriteR';
import { User } from './../models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  itemR: any = [];
  itemC: any = [];
  constructor(public auths: AuthService) {}

  addFavorate(recipe: Recipe) {
    const user: User = this.auths.userActive();
    const Favorate: FavoriteR[] =
      JSON.parse(localStorage.getItem('FavorateR') as string) || [];

    for (let fav of Favorate) {
      if (
        user.userId == fav.user_id &&
        recipe.ingredients == fav.type.ingredients &&
        recipe.instructions == fav.type.instructions
      ) {
        let index = Favorate.indexOf(fav);
        Favorate.splice(index, 1);
        this.itemR.splice(index, 1);
        localStorage.setItem('FavorateR', JSON.stringify(Favorate));

        return;
      }
    }
    Favorate.push({
      id: 't' + Math.random(),
      user_id: user.userId,
      type: recipe,
      type_name: 'Recipe',
    });
    localStorage.setItem('FavorateR', JSON.stringify(Favorate));
  }
  addFavorateC(coctail: Cocktail) {
    const user: User = this.auths.userActive();
    const favorate: FavoriteC[] =
      JSON.parse(localStorage.getItem('FavorateC') as string) || [];
    for (let fav of favorate) {
      if (user.userId == fav.user_id && coctail.name == fav.type.name) {
        let index = favorate.indexOf(fav);
        favorate.splice(index, 1);
        this.itemC.splice(index, 1);
        localStorage.setItem('FavorateC', JSON.stringify(favorate));

        return;
      }
    }
    favorate.push({
      id: 't' + Math.random(),
      user_id: user.userId,
      type: coctail,
      type_name: 'Cocktail',
    });
    localStorage.setItem('FavorateC', JSON.stringify(favorate));
  }
  getFavorateR(): Observable<any> {
    const user: User = this.auths.userActive();
    const Favorate: FavoriteR[] =
      JSON.parse(localStorage.getItem('FavorateR') as string) || [];
    this.itemR.splice(0);
    for (let fav of Favorate) {
      if (fav.user_id == user.userId && fav.type_name == 'Recipe') {
        this.itemR.push(fav);
      }
    }
    return of(this.itemR);
  }
  getFavorateC(): Observable<any> {
    const user: User = this.auths.userActive();
    const Favorate: FavoriteC[] =
      JSON.parse(localStorage.getItem('FavorateC') as string) || [];
    let item = [];
    this.itemC.splice(0);

    for (let fav of Favorate) {
      if (fav.user_id == user.userId && fav.type_name == 'Cocktail') {
        item.push(fav);
        this.itemC.push(fav);
      }
    }
    return of(this.itemC);
  }
  getSugeest() {}
  addSugeest() {}
  addRicepe() {}
  addCocktail() {}
  getUserRecipe() {}
  getUserCocktail() {}
}
