import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from './auth.service';
import { Comment } from './../models/Comment';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  cardComments: Comment[] = [];
  constructor(public auths: AuthService) {}
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

  getRating() {}
  addRating(reting:number,rec:any) {}
}
