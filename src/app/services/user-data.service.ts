import { ShareC } from './../models/shareC';
import { ShareR } from './../models/shareR';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/models/Recipe';
import { FavoriteC } from './../models/FavoriteC';
import { Cocktail } from './../models/Cocktail';
import { FavoriteR } from './../models/FavoriteR';
import { User } from './../models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public auths: AuthService, private toast: ToastrService) {
    this.getFavorateC().subscribe((params) => {
      this.itemForUser = params;
    });
    this.getFavorateR().subscribe((params) => {
      this.itemForUserR = params;
    });
  }
  showTostersuccess(massege: string) {
    this.toast.success(massege);
  }

  showTostererror(massege: string) {
    this.toast.error(massege);
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
        this.showTostererror('item removed form Favorate ');

        return;
      }
    }
    this.FavorateR.push({
      id: 't' + Math.random(),
      user_id: user.userId,
      type: recipe,
      type_name: 'Recipe',
    });
    this.showTostersuccess('Adedd to Favorate');

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
        this.showTostererror('item removed form Favorate ');

        return;
      }
    }

    this.FavorateC.push({
      id: 't' + Math.random(),
      user_id: user.userId,
      type: coctail,
      type_name: 'Cocktail',
    });
    this.showTostersuccess('Adedd to Favorate');

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
  addShareR(user: User, recipe: Recipe) {

    console.log(user, recipe);
    const userActiv: User = this.auths.userActive();
   let usershareRec:ShareR[] =[];
   this.getShareR(user).subscribe((params) => {
    usershareRec=params
   });
    const ShareRArray: ShareR[] =
      JSON.parse(localStorage.getItem('ShareR') as string) || [];
    for (let share of ShareRArray) {
      for (const item of usershareRec) {
        if (share.sharedUserId == user.userId &&recipe.instructions ==item.shareRecipe.instructions) {
          this.showTostererror(' This item Shared with User  ');
          return;
        }
      }

    }
    ShareRArray.push({
      id: Math.random(),
      user_id: userActiv.userId,
      type: 'Recipe',
      shareRecipe: recipe,
      sharedUserId: user.userId,
    });
    localStorage.setItem('ShareR', JSON.stringify(ShareRArray));
    this.showTostersuccess(`Shaerd Success  with ${user.fname}`);

    return;
  }
  getShareR(user:User):Observable<ShareR[]> {

    let shareUser: ShareR[] = [];
    const ShareRArray: ShareR[] =
      JSON.parse(localStorage.getItem('ShareR') as string) || [];
    for (const item of ShareRArray) {
      if (item.sharedUserId ==user.userId &&item.type == "Recipe") {
        shareUser.push(item)

      }
    }
    return of(shareUser);
  }

  getShareC(user:User):Observable<ShareC[]> {

    let shareUser: ShareC[] = [];
    const ShareRArray: ShareC[] =
      JSON.parse(localStorage.getItem('ShareC') as string) || [];
    for (const item of ShareRArray) {
      if (item.sharedUserId ==user.userId && item.type == "Cocktail") {
        shareUser.push(item)

      }
    }
    return of(shareUser);
  }
  addShareC(user: User, coctail: Cocktail) {

    console.log(user, coctail);
    const userActiv: User = this.auths.userActive();
   let usershareRec:ShareC[] =[];
    this.getShareC(user).subscribe((params) => {
      usershareRec=params;
   });
    const ShareRArray: ShareC[] =
      JSON.parse(localStorage.getItem('ShareC') as string) || [];
    for (let share of ShareRArray) {
      for (const item of usershareRec) {
        if (share.sharedUserId == user.userId &&coctail.instructions ==item.shareCocktail.instructions) {
          this.showTostererror(' This item Shared with User  ');
          return;
        }
      }

    }
    ShareRArray.push({
      id: Math.random(),
      user_id: userActiv.userId,
      type: 'Cocktail',
      shareCocktail: coctail,
      sharedUserId: user.userId,
    });
    localStorage.setItem('ShareC', JSON.stringify(ShareRArray));
    this.showTostersuccess(`Shaerd Success  with ${user.fname}`);

    return;
  }
  addRicepe() {}
  addCocktail() {}
  getUserRecipe() {}
  getUserCocktail() {}
}
