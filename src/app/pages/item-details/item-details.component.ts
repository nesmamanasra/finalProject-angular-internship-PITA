import { CardDataService } from './../../services/card-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';
import {Comment} from '../../models/Comment'

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  coments?=[1,2,2,3,3,44,,4]
  rating:number = 0;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  recipe?:any;
  comment:string ='';
  cardComments?:Comment[]
  constructor(router:Router,public activeRouter: ActivatedRoute,public cdetser: CardDataService) {

     }

  ngOnInit() {
    this.recipe =JSON.parse(JSON.parse(JSON.stringify(this.activeRouter.snapshot.paramMap.get('data'))));
    this.cdetser.getcardCommits(this.recipe).subscribe((params) => {
      this.cardComments = params as Comment[]
    })
  }
    onRatingChanged(rating:any){
    console.log(rating);
    this.rating = rating;
    this.cdetser.addRating(this.rating,this.recipe)
  }
  addComment(){
    this.cdetser.addCommit(this.comment,this.recipe);
    this.comment ='';
  }
}
