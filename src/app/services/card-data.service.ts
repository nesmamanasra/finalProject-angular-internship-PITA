import { Recipe } from './../models/Recipe';
import { Cocktail } from './../models/Cocktail';
import { UserDataService } from './user-data.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from './auth.service';
import { Comment } from './../models/Comment';
import { FavoriteC } from '../models/FavoriteC';
import { FavoriteR } from '../models/FavoriteR';
import { Rating } from '../models/Rating';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  cardComments: Comment[] = [];
  constructor(public auths: AuthService, public userservic: UserDataService) {}
  getcardCommits(rec: any): Observable<any> {
    let comments: Comment[] =
      JSON.parse(localStorage.getItem('Comments') as string) || [];
    this.cardComments.splice(0);
    for (let c of comments) {
      if (rec.instructions == c.card_id ) {
        this.cardComments.push(c);
      }
    }
    return of(this.cardComments);
  }
  addCommit(comment: string, rec: any) {
    const user: User = this.auths.userActive();
    let comments: Comment[] =
      JSON.parse(localStorage.getItem('Comments') as string) || [];
    comments.push({
      id: 't' + Math.random(),
      card_id: rec.instructions,
      user_id: 't' + Math.random(),
      comment: comment,
      userImage: user.imgUrl,
      rating: this.getRating(rec),
      userName: user.fname + ' ' + user.lname,
      type_name: 'Comment',
    });
    this.cardComments.push({
      id: 't' + Math.random(),
      card_id: rec.instructions,
      user_id: 't' + Math.random(),
      comment: comment,
      userImage: user.imgUrl,
      rating: this.getRating(rec),
      userName: user.fname + ' ' + user.lname,
      type_name: 'Comment',
    });
    localStorage.setItem('Comments', JSON.stringify(comments));
  }
  isfavorate(card: any) {
    const user: User = this.auths.userActive();
    const Favorate: FavoriteC[] =
      JSON.parse(localStorage.getItem('FavorateC') as string) || [];
    const FavorateR: FavoriteR[] =
      JSON.parse(localStorage.getItem('FavorateR') as string) || [];
    for (let fav of Favorate) {
      if (
        fav.user_id == user.userId &&
        fav.type.instructions == card.instructions
      ) {
        return true;
      }
    }
    for (let fav of FavorateR) {
      if (
        fav.user_id == user.userId &&
        fav.type.instructions == card.instructions
      ) {
        return true;
      }
    }
    return false;
  }
  getRating(rec: Recipe | Cocktail) {
    const user: User = this.auths.userActive();

    const ratingItems: Rating[] =
      JSON.parse(localStorage.getItem('Rating') as string) || [];
    for (let recipeR of ratingItems) {
      if (
        user.userId == recipeR.user_id &&
        rec.instructions == recipeR.type.instructions
      ) {
        return recipeR.rating;
      }
    }
    return 0;
  }
  addRating(reting: number, rec: Recipe | Cocktail) {
    const user: User = this.auths.userActive();
    const ratingItems: Rating[] =
      JSON.parse(localStorage.getItem('Rating') as string) || [];
    for (const iterator of ratingItems) {
      if (
        user.userId == iterator.user_id &&
        rec.instructions == iterator.type.instructions
      ) {
        console.log('rating exist');
        let index = ratingItems.indexOf(iterator);
        ratingItems.splice(index, 1);
      }
    }
    ratingItems.push({
      id: '' + Math.random(),
      user_id: user.userId,
      card_id: 't' + Math.random(),
      rating: reting,
      type_name: 'Rating',
      type: rec,
    });
    localStorage.setItem('Rating', JSON.stringify(ratingItems));
  }
}
