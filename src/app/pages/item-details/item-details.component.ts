import { Recipe } from './../../models/Recipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';
import { HttpParams } from '@angular/common/http';

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
  constructor(router:Router,public activeRouter: ActivatedRoute) {
    console.log(router.paramsInheritanceStrategy )
   }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((params) => {
      this.recipe = params["recipe"] ;
      console.log(this.recipe +"this is from detail");
    })

    console.log(this.activeRouter.data)
  }
    onRatingChanged(rating:any){
    console.log(rating);
    this.rating = rating;
  }
}
