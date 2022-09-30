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
  itemForUser: FavoriteC[] = [];
  itemForUserR: FavoriteR[] = [];
  FavorateC: FavoriteC[] =
    JSON.parse(localStorage.getItem('FavorateC') as string) || [];
  FavorateR: FavoriteR[] =
    JSON.parse(localStorage.getItem('FavorateR') as string) || [];
  constructor(public auths: AuthService) {
    this.getFavorateC().subscribe((params) => {
      this.itemForUser = params;
    });
    this.getFavorateR().subscribe((params) => {
      this.itemForUserR = params;
    });
  }

  addFavorate(recipe: Recipe) {
    const user: User = this.auths.userActive();
    for (let fav of this.FavorateR) {
      if (
        user.userId == fav.user_id &&
        recipe.ingredients == fav.type.ingredients &&
        recipe.instructions == fav.type.instructions
      ) {
        let index = this.FavorateR.indexOf(fav);
        let i = this.itemForUserR.indexOf(fav);
        this.FavorateR.splice(index, 1);
        this.itemForUserR.splice(i, 1);
        localStorage.setItem('FavorateR', JSON.stringify(this.FavorateR));

        return;
      }
    }
    this.FavorateR.push({
      id: 't' + Math.random(),
      user_id: user.userId,
      type: recipe,
      type_name: 'Recipe',
    });
    localStorage.setItem('FavorateR', JSON.stringify(this.FavorateR));
  }
  addFavorateC(coctail: Cocktail) {
    const user: User = this.auths.userActive();
    for (let fav of this.FavorateC) {
      if (user.userId == fav.user_id && coctail.name == fav.type.name) {
        let index = this.FavorateC.indexOf(fav);
        let ind = this.itemForUser.indexOf(fav);
        console.log(index, ind);
        this.FavorateC.splice(index, 1);
        this.itemForUser.splice(ind, 1);
        localStorage.setItem('FavorateC', JSON.stringify(this.FavorateC));

        return;
      }
    }

    this.FavorateC.push({
      id: 't' + Math.random(),
      user_id: user.userId,
      type: coctail,
      type_name: 'Cocktail',
    });

    localStorage.setItem('FavorateC', JSON.stringify(this.FavorateC));
  }
  getFavorateR(): Observable<any> {
    const user: User = this.auths.userActive();
    this.itemForUserR.splice(0);
    for (let fav of this.FavorateR) {
      if (fav.user_id == user.userId) {
        this.itemForUserR.push(fav);
      }
    }
    return of(this.itemForUserR);
  }
  getFavorateC(): Observable<any> {
    const user: User = this.auths.userActive();
    this.itemForUser.splice(0);
    for (let fav of this.FavorateC) {
      if (fav.user_id == user.userId) {
        this.itemForUser.push(fav);
      }
    }
    return of(this.itemForUser);
  }
  addSugeest() {}
  getSugeest() {}
  addRicepe() {}
  addCocktail() {}
  getUserRecipe() {}
  getUserCocktail() {}
}
