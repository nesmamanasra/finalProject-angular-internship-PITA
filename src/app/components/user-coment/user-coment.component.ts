import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../../models/Comment'
@Component({
  selector: 'app-user-coment',
  templateUrl: './user-coment.component.html',
  styleUrls: ['./user-coment.component.css']
})
export class UserComentComponent implements OnInit {
  @Input('comment')  comment?:Comment;
  userImge?:string
  ratingC?:number[]=[]
  constructor() {
    this.comment?.userImage
    this.ratingC=this.comment?.rating as unknown as [];

  }

  ngOnInit(): void {
  }

}
