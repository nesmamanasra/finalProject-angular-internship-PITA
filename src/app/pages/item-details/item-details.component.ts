import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';

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

  constructor() { }

  ngOnInit() {
  }
    onRatingChanged(rating:any){
    console.log(rating);
    this.rating = rating;
  }
}
