import { Cocktail } from './../models/Cocktail';
import { UserDataService } from './user-data.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from './auth.service';
import { Comment } from './../models/Comment';
import { FavoriteC } from '../models/FavoriteC';
import { FavoriteR } from '../models/FavoriteR';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  cardComments: Comment[] = [];
  constructor(public auths: AuthService,public userservic:UserDataService) {}
  getcardCommits(rec: any): Observable<any> {
    let comments: Comment[] =
      JSON.parse(localStorage.getItem('Comments') as string) || [];
    this.cardComments.splice(0);
    for (let c of comments) {
      if (rec.instructions == c.card_id) {
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
      rating: 2,
      userName: user.fname + ' ' + user.lname,
      type_name: 'Comment',
    });
    this.cardComments.push({
      id: 't' + Math.random(),
      card_id: rec.instructions,
      user_id: 't' + Math.random(),
      comment: comment,
      userImage: user.imgUrl,
      rating: 2,
      userName: user.fname + ' ' + user.lname,
      type_name: 'Comment',
    })
    localStorage.setItem('Comments', JSON.stringify(comments));
  }
  isfavorate(card:any){
    const user: User = this.auths.userActive();
    const Favorate: FavoriteC[] =
      JSON.parse(localStorage.getItem('FavorateC') as string) || [];
      const FavorateR: FavoriteR[] =
      JSON.parse(localStorage.getItem('FavorateR') as string) || [];
    for (let fav of Favorate) {
      if (fav.user_id == user.userId && fav.type.instructions == card.instructions) {

        return true;
      }
    }
  for (let fav of FavorateR) {
    if (fav.user_id == user.userId && fav.type.instructions == card.instructions) {
      return true;

    }
  }
return false
  }
  getRating() {}
  addRating(reting:number,rec:any) {}
}
