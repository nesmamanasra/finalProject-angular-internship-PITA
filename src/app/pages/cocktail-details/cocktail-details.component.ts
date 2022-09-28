import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';
import { CardDataService } from 'src/app/services/card-data.service';
import {Comment} from '../../models/Comment'

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  rating:number = 0;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  cocktail?:any;
  comment:string ='';
  cardComments?:Comment[]

  constructor(router:Router,public activeRouter: ActivatedRoute,public cdetser: CardDataService) {
   }

  ngOnInit() {
    this.cocktail =JSON.parse(JSON.parse(JSON.stringify(this.activeRouter.snapshot.paramMap.get('data'))));
    console.log(this.cocktail,"this data from details");
    this.cdetser.getcardCommits(this.cocktail).subscribe((params) => {
      this.cardComments = params as Comment[]
      
    })

  }
    onRatingChanged(rating:any){
    console.log(rating);
    this.rating = rating;
  }
  addComment(){
    this.cdetser.addCommit(this.comment,this.cocktail);
    this.comment ='';
  }
}
