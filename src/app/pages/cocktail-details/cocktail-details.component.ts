import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  coments?=[1,2,2,3,3,44,,4]
  rating:number = 0;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  cocktail?:any;
  constructor(router:Router,public activeRouter: ActivatedRoute) {
    console.log(router.paramsInheritanceStrategy )
   }

  ngOnInit() {
    this.cocktail =JSON.parse(JSON.parse(JSON.stringify(this.activeRouter.snapshot.paramMap.get('data'))));
    console.log(this.cocktail,"this data from details");

  }
    onRatingChanged(rating:any){
    console.log(rating);
    this.rating = rating;
  }
}
